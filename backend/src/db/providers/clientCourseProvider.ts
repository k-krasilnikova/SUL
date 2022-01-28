import { IProgress } from 'interfaces/ICourses/IQueryCourses';
import CourseStatus from 'enums/coursesEnums';

import ClientCourseModel from '../models/ClientCourses';

const getClientCoursesProvider = async (userId: string) => {
  const clientCourses = await ClientCourseModel.find({ user: userId }).populate('course');
  return clientCourses;
};

const getClientCourseProvider = async (clientCourseId: string) => {
  const clientCourse = await ClientCourseModel.findOne({ _id: clientCourseId })
    .populate('course')
    .lean();
  return clientCourse;
};

const applyCourseProvider = async (courseId: string, userId: string, progressDto: IProgress[]) => {
  await ClientCourseModel.create({
    user: userId,
    course: courseId,
    status: CourseStatus.approved,
    progress: progressDto,
  });
  return { status: 'applyed successful' };
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
