import mongoose from 'mongoose';

import { IProgress, IQueryCourses } from 'interfaces/ICourses/IQueryCourses';
import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import CourseStatus from 'enums/coursesEnums';
import { SortOrder } from 'enums/common';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import {
  DEFAULT_N_PER_PAGE,
  DEFAULT_ORDER_FIELD,
  FIRST_PAGE,
  NOTHING,
  NO_FILTER,
} from 'config/constants';

import ClientCourseModel from '../models/ClientCourses';

const getClientCoursesProvider = async (
  userId: string,
  {
    pageN,
    title,
    orderField = DEFAULT_ORDER_FIELD,
    order = SortOrder.asc,
    nPerPage = DEFAULT_N_PER_PAGE,
  }: IQueryCourses,
): Promise<IClientCoursePopulated[]> => {
  const sortingField = { [orderField]: order };
  const clientCourses: IClientCoursePopulated[] = await ClientCourseModel.find({
    user: userId,
    title: title ? { title: { $regex: new RegExp(title), $options: 'i' } } : NO_FILTER,
  })
    .sort(sortingField)
    .skip(pageN ? (pageN - FIRST_PAGE) * nPerPage : NOTHING)
    .limit(nPerPage)
    .populate('course')
    .lean();
  return clientCourses;
};

const getAllClientCoursesProvider = async (userId: string): Promise<IClientCoursePopulated[]> => {
  const courses: IClientCoursePopulated[] = await ClientCourseModel.find({ user: userId })
    .populate('course')
    .lean();

  return courses;
};

const getClientCourseProvider = async (clientCourseId: string): Promise<IClientCoursePopulated> => {
  const clientCourse: IClientCoursePopulated = await ClientCourseModel.findOne({
    _id: clientCourseId,
  })
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
    throw new NotFoundError('Course not found.');
  }
  return currStatus;
};

const getAssessmentProvider = async (courseId: string) => {
  const course = await ClientCourseModel.findById(courseId).select('withAssessment -_id');
  if (!course) {
    throw new NotFoundError('Course not found.');
  }
  const { withAssessment } = course;
  return withAssessment;
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

const updateApplyDate = async (courseId: string) => {
  const updatedCourse = await ClientCourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { applyDate: Date.now() } },
  );
  if (updatedCourse) {
    return updatedCourse;
  }
  throw new BadRequestError('Bad request. Check the data being sent');
};

const arrangeAssessment = async (courseId: string) => {
  const updatedCourse = await ClientCourseModel.findByIdAndUpdate(courseId, {
    $set: { withAssessment: true },
  });

  if (!updatedCourse) {
    throw new NotFoundError('Client course not found.');
  }
};

export {
  getClientCoursesProvider,
  getAllClientCoursesProvider,
  getClientCourseProvider,
  getStatusProvider,
  getAssessmentProvider,
  updateCourseStatus,
  applyCourseProvider,
  updateCourseProgress,
  getCurrentProgress,
  updateApplyDate,
  arrangeAssessment,
};
