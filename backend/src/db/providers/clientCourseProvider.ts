import { IProgress } from 'interfaces/ICourses/IQueryCourses';
import CourseStatus from 'enums/coursesEnums';

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

const applyCourseProvider = async (courseId: string, userId: string, progressDto: IProgress[]) => {
  const applyedCourse = await ClientCourseModel.create({
    course: courseId,
    status: CourseStatus.approved,
    currentStage: 1,
    progress: progressDto,
  });
  await UserModel.updateOne({ _id: userId }, { $push: { courses: applyedCourse.course } });
  return applyedCourse;
};

const updateCourseProgress = async (courseId: string, stage: string) => {
  const updatedProgress = await ClientCourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { 'progress.$[elem].isCompleted': true } },
    { arrayFilters: [{ 'elem.stage': { $eq: stage } }] },
  );
  return updatedProgress;
};

const getStatusProvider = async (courseId: string) => {
  const currStatus = await ClientCourseModel.findOne(
    { _id: courseId },
    { status: 1, id: 0 },
  ).lean();
  return currStatus;
};

const updateCourseStatus = async (courseId: string, status: string) => {
  const updatedCourse = await ClientCourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { status } },
  );
  return updatedCourse;
};

export {
  getClientCoursesProvider,
  getStatusProvider,
  updateCourseStatus,
  applyCourseProvider,
  updateCourseProgress,
};
