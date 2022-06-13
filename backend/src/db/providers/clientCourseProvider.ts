import mongoose, { Types } from 'mongoose';

import { IProgress } from 'interfaces/courses/query';
import {
  IClientCourse,
  IClientCoursePopulated,
  TClientCourseFields,
} from 'interfaces/entities/clientCourses';
import { TGetCoursesParams } from 'interfaces/requests/common/queries';
import CourseStatus from 'enums/courses';
import { SortOrder } from 'enums/common';
import {
  DEFAULT_N_PER_PAGE,
  DEFAULT_ORDER_CLIENT_COURSES_FIELD,
  FIRST_PAGE,
  NOTHING,
  NO_FILTER,
  USER_ROLES,
} from 'config/constants';
import { BadRequestError, NotFoundError } from 'classes/errors/clientErrors';

import ClientCourseModel from '../models/ClientCourses';
import UserModel from '../models/User';

const getClientCoursesProvider = async (
  userId: string,
  {
    pageN,
    title,
    status,
    complexity,
    technologies,
    order = SortOrder.asc,
    orderField = DEFAULT_ORDER_CLIENT_COURSES_FIELD,
    nPerPage = DEFAULT_N_PER_PAGE,
  }: TGetCoursesParams,
): Promise<IClientCoursePopulated[]> => {
  const sortingField = { [orderField]: order };
  const clientCourses: IClientCoursePopulated[] = await ClientCourseModel.aggregate([
    {
      $lookup: {
        from: 'courses',
        localField: 'course',
        foreignField: '_id',
        pipeline: [{ $project: { materials: 0 } }],
        as: 'course',
      },
    },
    { $unwind: '$course' },
    {
      $lookup: {
        from: 'skills',
        localField: 'course.technologies.skill',
        foreignField: '_id',
        pipeline: [{ $project: { name: 1 } }],
        as: 'techsMapSkills',
      },
    },
    {
      $match: {
        $and: [
          { user: new mongoose.Types.ObjectId(userId) },
          status && status.length ? { status: { $in: status } } : NO_FILTER,
          title
            ? {
                'course.title': {
                  $regex: new RegExp(title),
                  $options: 'i',
                },
              }
            : NO_FILTER,
          complexity && complexity.length
            ? { 'course.complexity': { $in: complexity } }
            : NO_FILTER,
          technologies && technologies.length
            ? { 'techsMapSkills.name': { $in: technologies } }
            : NO_FILTER,
        ],
      },
    },
    {
      $sort: {
        ...sortingField,
      },
    },
    {
      $skip: pageN ? (pageN - FIRST_PAGE) * nPerPage : NOTHING,
    },
    {
      $limit: Number(nPerPage),
    },
    {
      $project: {
        techsMapSkills: 0,
        testResult: 0,
      },
    },
  ]);
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
    .populate({
      path: 'course',
      populate: [
        { path: 'similarCourses' },
        {
          path: 'technologies',
          populate: {
            path: 'skill',
            select: 'name image maxScore -_id',
          },
        },
      ],
    })
    .lean();

  if (!clientCourse) {
    throw new NotFoundError('Course not found.');
  }

  return clientCourse;
};

const getClientCourseByCourseAndUser = async (
  commonCourseId: string,
  userId: string,
): Promise<IClientCoursePopulated> => {
  const clientCourse: IClientCoursePopulated = await ClientCourseModel.findOne({
    course: commonCourseId,
    user: userId,
  })
    .populate({
      path: 'course',
      populate: [
        { path: 'similarCourses' },
        {
          path: 'technologies',
          populate: {
            path: 'skill',
            select: 'name image maxScore -_id',
          },
        },
      ],
    })
    .lean();

  if (!clientCourse) {
    throw new NotFoundError('Course not found.');
  }

  return clientCourse;
};

const applyCourseProvider = async (
  courseId: string,
  userId: string,
  progressDto: IProgress[],
): Promise<IClientCourse> => {
  const dbUser = await UserModel.findById(userId).lean();

  const courseStatus =
    dbUser && dbUser.role === USER_ROLES.EMPLOYEE ? CourseStatus.pending : CourseStatus.approved;

  const applyedCourse = await ClientCourseModel.create({
    user: userId,
    course: courseId,
    status: courseStatus,
    progress: progressDto,
    date: new Date(),
  });
  return applyedCourse;
};

const updateCourseProgress = async (courseId: string, stage: string): Promise<IClientCourse> => {
  const updatedProgress = await ClientCourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { 'progress.$[elem].isCompleted': true } },
    { arrayFilters: [{ 'elem.stage': stage }], returnDocument: 'after' },
  ).lean();

  if (!updatedProgress) {
    throw new NotFoundError('Course was not found.');
  }

  return updatedProgress;
};

const getStatusProvider = async (courseId: string): Promise<IClientCourse> => {
  const currStatus = await ClientCourseModel.findOne(
    { _id: courseId },
    { status: 1, _id: 0 },
  ).lean();
  if (!currStatus) {
    throw new NotFoundError('Course not found.');
  }
  return currStatus;
};

const getAssessmentProvider = async (courseId: string): Promise<boolean> => {
  const course = await ClientCourseModel.findById(courseId).select('withAssessment -_id');
  if (!course) {
    throw new NotFoundError('Course not found.');
  }
  const { withAssessment } = course;
  return withAssessment;
};

const getCurrentProgress = async (
  clientCourseId: string,
): Promise<
  {
    currProgress: number;
  }[]
> => {
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

const updateClientCourseField = async (
  courseId: string,
  field: TClientCourseFields,
  value: unknown,
): Promise<IClientCourse> => {
  const updatedCourse = await ClientCourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { [field]: value } },
  );
  if (updatedCourse) {
    return updatedCourse;
  }
  throw new BadRequestError('Bad request. Check the data being sent.');
};

const arrangeAssessment = async (courseId: string): Promise<void> => {
  const updatedCourse = await ClientCourseModel.findByIdAndUpdate(courseId, {
    $set: { withAssessment: true },
  });

  if (!updatedCourse) {
    throw new NotFoundError('Client course not found.');
  }
};

const getClientCoursesByCourseId = async (courseId: string): Promise<IClientCourse | null> => {
  const allClientCoursesByCourseId = await ClientCourseModel.findOne({ course: courseId }).lean();

  return allClientCoursesByCourseId;
};

const getClientCourseByCourseId = async (
  courseId: string | Types.ObjectId,
  userId: string | Types.ObjectId,
): Promise<IClientCourse> => ClientCourseModel.findOne({ course: courseId, user: userId }).lean();

const checkNotDeleteCoursesProvider = async (courseId: string) => {
  const clientCourses = await ClientCourseModel.find({ course: courseId });

  const notDeleteCourses = clientCourses.find(
    (clientCourse) =>
      clientCourse.status === CourseStatus.started || clientCourse.status === CourseStatus.testing,
  );

  if (notDeleteCourses) {
    throw new BadRequestError('The course has already started or is being tested for some people.');
  }
};

const assignCourseToEmployee = async (
  assignTo: string | Types.ObjectId,
  courseId: string | Types.ObjectId,
  progressDto: IProgress[],
  withAssessment?: boolean,
): Promise<IClientCourse> => {
  const createdDoc = await ClientCourseModel.create({
    user: assignTo,
    course: courseId,
    status: CourseStatus.approved,
    withAssessment: withAssessment || false,
    progress: progressDto,
    date: Date.now(),
  });

  return createdDoc;
};

const getPendingAssessmentsProvider = async (
  usersIds: string[],
): Promise<IClientCoursePopulated[]> =>
  ClientCourseModel.find({
    user: {
      $in: usersIds,
    },
    status: CourseStatus.assessment,
  })
    .populate({
      path: 'course',
      select: '-_id avatar title technologies',
      populate: {
        path: 'technologies.skill',
        model: 'Skill',
        select: '-_id name image maxScore',
      },
    })
    .populate('user', '-_id avatar firstName lastName position')
    .select('user course startTestDate')
    .lean();

export {
  getClientCoursesProvider,
  getAllClientCoursesProvider,
  getClientCourseProvider,
  getStatusProvider,
  getAssessmentProvider,
  applyCourseProvider,
  getCurrentProgress,
  arrangeAssessment,
  updateCourseProgress,
  updateClientCourseField,
  getClientCoursesByCourseId,
  getClientCourseByCourseId,
  assignCourseToEmployee,
  checkNotDeleteCoursesProvider,
  getPendingAssessmentsProvider,
  getClientCourseByCourseAndUser,
};
