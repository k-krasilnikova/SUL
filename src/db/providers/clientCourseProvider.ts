import mongoose from 'mongoose';

import { IProgress } from 'interfaces/ICourses/IQueryCourses';
import CourseStatus from 'enums/coursesEnums';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

import ClientCourseModel from '../models/ClientCourses';

const getClientCoursesProvider = async (userId: string) => {
  const clientCourses = await ClientCourseModel.find({ user: userId }).populate('course');
  return clientCourses;
};

const getClientCourseProvider = async (clientCourseId: string) => {
  const clientCourse = await ClientCourseModel.findOne({ _id: clientCourseId })
    .populate('course')
    .lean();
  if (!clientCourse) {
    throw new NotFoundError('Course not found.');
  }
  return clientCourse;
};

const applyCourseProvider = async (courseId: string, userId: string, progressDto: IProgress[]) => {
  const applyedCourse = await ClientCourseModel.create({
    user: userId,
    course: courseId,
    status: CourseStatus.pending,
    progress: progressDto,
    date: new Date(),
  });
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
  if (!currStatus) {
    throw new NotFoundError('course not found');
  }
  return currStatus;
};

const getCurrentProgress = async (clientCourseId: string) => {
  const progress: Array<{ currProgress: number }> = await ClientCourseModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(clientCourseId) } },
    {
      $project: {
        _id: 0,
        currProgress: {
          $divide: [
            {
              $size: {
                $filter: {
                  input: '$progress',
                  as: 'passed',
                  cond: { $eq: ['$$passed.isCompleted', true] },
                },
              },
            },
            { $size: '$progress' },
          ],
        },
      },
    },
  ]);
  return progress;
};

const updateCourseStatus = async (courseId: string, courseStatus: string) => {
  const updatedCourse = await ClientCourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { status: courseStatus } },
  );
  if (updatedCourse) {
    return updatedCourse;
  }
  throw new BadRequestError('Bad request. Check the data being sent');
};

export {
  getClientCoursesProvider,
  getClientCourseProvider,
  getStatusProvider,
  updateCourseStatus,
  applyCourseProvider,
  updateCourseProgress,
  getCurrentProgress,
};