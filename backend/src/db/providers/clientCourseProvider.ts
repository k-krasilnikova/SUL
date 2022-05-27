import mongoose, { Types } from 'mongoose';

import { IProgress } from 'interfaces/ICourses/IQueryCourses';
import {
  IClientCourse,
  IClientCoursePopulated,
  TClientCourseFields,
} from 'interfaces/Ientities/IclientCourses';
import { IGetCoursesRequestQuery } from 'interfaces/requests/common/queries';
import CourseStatus from 'enums/coursesEnums';
import { SortOrder } from 'enums/common';
import {
  DEFAULT_N_PER_PAGE,
  DEFAULT_ORDER_FIELD,
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
    orderField = DEFAULT_ORDER_FIELD,
    order = SortOrder.asc,
    nPerPage = DEFAULT_N_PER_PAGE,
  }: IGetCoursesRequestQuery,
): Promise<IClientCoursePopulated[]> => {
  const sortingField = { [orderField]: order };
  const clientCourses: IClientCoursePopulated[] = await ClientCourseModel.find({
    user: userId,
    title: title ? { title: { $regex: new RegExp(title), $options: 'i' } } : NO_FILTER,
  })
    .sort(sortingField)
    .skip(pageN ? (pageN - FIRST_PAGE) * nPerPage : NOTHING)
    .limit(nPerPage)
    .populate({ path: 'course', select: '-materials' })
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
    .populate({ path: 'course', populate: 'similarCourses' })
    .lean();

  if (!clientCourse) {
    throw new NotFoundError('Course not found.');
  }

  return clientCourse;
};

const applyCourseProvider = async (courseId: string, userId: string, progressDto: IProgress[]) => {
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

const updateCourseProgress = async (courseId: string, stage: string) => {
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

const updateClientCourseField = async (
  courseId: string,
  field: TClientCourseFields,
  value: unknown,
) => {
  const updatedCourse = await ClientCourseModel.findOneAndUpdate(
    { _id: courseId },
    { $set: { [field]: value } },
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

const getClientCoursesByCourseId = async (courseId: string) => {
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
) => {
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
};
