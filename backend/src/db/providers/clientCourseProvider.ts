import mongoose from 'mongoose';

import CourseModel from 'db/models/Course';
import { IProgress } from 'interfaces/ICourses/IQueryCourses';

import ClientCourseModel from '../models/ClientCourses';
import UserModel from '../models/User';

const getClientCoursesProvider = async () => {
  try {
    return await ClientCourseModel.find().populate('course');
  } catch (e) {
    throw new Error();
  }
};

const materialsCounterProvider = async (courseId: string) => {
  const materialsCount = await CourseModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(courseId) } },
    {
      $project: {
        total: { $size: '$materials' },
      },
    },
  ]);
  return materialsCount;
};

const applyCourseProvider = async (courseId: string, userId: string, progressDto: IProgress[]) => {
  const applyedCourse = await ClientCourseModel.create({
    course: courseId,
    status: 'approved',
    currentStage: 1,
    progress: progressDto,
  });
  await UserModel.updateOne({ _id: userId }, { $push: { courses: applyedCourse.course } });
  return applyedCourse;
};

export { getClientCoursesProvider, applyCourseProvider, materialsCounterProvider };
