import mongoose from 'mongoose';

import CourseModel from 'db/models/Course';
import { IProgress } from 'interfaces/ICourses/IQueryCourses';
import ClientCourseModel from '../models/ClientCourses';

interface ApplyedCourse {
  _id: mongoose.ObjectId,
  user: mongoose.ObjectId,
  course: mongoose.ObjectId
}

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

const findAlreadyAppliedCourse = (applyedCourses: ApplyedCourse[], courseId: string) => applyedCourses.find(
  (clientCourse) => clientCourse.course.toString() === courseId.toString(),
);

const applyCourseProvider = async (courseId: string, userId: string, progressDto: IProgress[]) => {
  const applyedCourses = await ClientCourseModel.find({ user: userId });
  const alreadyApplied = findAlreadyAppliedCourse(applyedCourses, courseId)
  if (!alreadyApplied) {
    const applyedCourse = await ClientCourseModel.create({
      user: new mongoose.Types.ObjectId(userId),
      course: new mongoose.Types.ObjectId(courseId),
      status: 'approved',
      currentStage: 1,
      progress: progressDto,
    });
    return applyedCourse;
  }
  return { message: 'This course already applied' };
};

export { getClientCoursesProvider, applyCourseProvider, materialsCounterProvider };
