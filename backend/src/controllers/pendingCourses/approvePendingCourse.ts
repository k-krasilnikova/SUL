import { NextFunction, Request, Response } from 'express';

import CourseStatus from 'enums/coursesEnums';
import {
  getStatusProvider,
  getClientCourseProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { getUserProvider, removeFromPendingFieldCourses } from 'db/providers/userProvider';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { IUser } from 'interfaces/Ientities/Iusers';
import { TCourseLocals } from 'interfaces/Imiddlewares/Imiddlewares';

const approvePendingCourse = async (
  req: Request,
  res: Response<
    never,
    TCourseLocals & {
      managerId?: string;
      clientCourseId: string | undefined;
      results: Record<'updateStatus', string>;
    }
  >,
  next: NextFunction,
) => {
  try {
    const { managerId, clientCourseId, results } = res.locals;
    if (!clientCourseId || !managerId) {
      throw new BadRequestError('Invalid query.');
    }
    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.pending) {
      throw new BadRequestError(`Can't approve course in status: ${status}`);
    }

    const { _id: manager }: IUser = await getUserProvider(managerId);
    const clientCourse = await getClientCourseProvider(clientCourseId);
    await updateClientCourseField(clientCourseId, 'status', CourseStatus.approved);
    await removeFromPendingFieldCourses(manager, clientCourse._id);
    results.updateStatus = 'Course was approved';
    next();
  } catch (error) {
    next(error);
  }
};

export default approvePendingCourse;
