import mongoose from 'mongoose';

import { INITIAL_INDX } from 'config/constants';
import CourseModel from 'db/models/Course';
import { generateProgressDto } from 'utils/dto/dtoUtils';

import ClientCourseModel from '../models/ClientCourses';
import UserModel from '../models/User';

const getClientCoursesProvider = async () => {
  try {
    const courses = await ClientCourseModel.find().lean();
    return courses;
  } catch (e) {
    throw new Error();
  }
};

const applyCourseProvider = async (courseId: string, userId: string) => {
  const materialsCount = await CourseModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(courseId) } },
    {
      $project: {
        total: { $size: '$materials' },
      },
    },
  ]);
  const progressDto = generateProgressDto(materialsCount[INITIAL_INDX].total);
  const applyedCourse = await ClientCourseModel.create({
    course: courseId,
    status: 'approved',
    currentStage: 1,
    progress: progressDto,
  });
  await UserModel.updateOne({ _id: userId }, { $push: { courses: applyedCourse.course } });
  return applyedCourse;
};

export { getClientCoursesProvider, applyCourseProvider };
