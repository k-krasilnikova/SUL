import { ObjectId } from 'mongoose';

import { IProgress } from 'interfaces/ICourses/IQueryCourses';
import CourseStatus from 'enums/coursesEnums';
import ClientCourseModel from '../models/ClientCourses';
import UserModel from '../models/User';

const getClientCoursesProvider = async (userId: string) => {
  try {
    return await ClientCourseModel.find({ user: userId }).populate('course');
  } catch (e) {
    throw new Error();
  }
};

const getClientCourseProvider = async (clientCourseId: string) => {
  const clientCourse = await ClientCourseModel.findOne({ _id: clientCourseId })
    .populate('course')
    .lean();
  return clientCourse;
};

const applyCourseProvider = async (
  courseId: string,
  userId: string,
  progressDto: IProgress[],
  managerId: ObjectId,
) => {
  const applyedCourse = await ClientCourseModel.create({
    user: userId,
    course: courseId,
    status: CourseStatus.pending,
    progress: progressDto,
  });
  await UserModel.updateOne({ _id: managerId }, { $push: { pendingCourses: applyedCourse } });
  return applyedCourse;
};

const updateCourseProgress = async (courseId: string, stage: string) => {
  const updatedProgress = await ClientCourseModel.updateOne(
    { _id: courseId },
    { $set: { 'progress.$[elem].isCompleted': true } },
    { arrayFilters: [{ 'elem.stage': stage }] },
  );
  return updatedProgress;
};

const getStatusProvider = async (courseId: string) => {
  const currStatus = await ClientCourseModel.findOne(
    { _id: courseId },
    { status: 1, _id: 0 },
  ).lean();
  return currStatus;
};

const updateCourseStatus = async (courseId: string, courseStatus: string) => {
  const updatedCourse = await ClientCourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { status: courseStatus } },
  );
  return updatedCourse;
};

export {
  getClientCoursesProvider,
  getClientCourseProvider,
  getStatusProvider,
  updateCourseStatus,
  applyCourseProvider,
  updateCourseProgress,
};
