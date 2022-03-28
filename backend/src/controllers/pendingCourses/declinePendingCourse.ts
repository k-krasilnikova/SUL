import { NextFunction, Request, Response } from 'express';

import {
  getStatusProvider,
  updateApplyDate,
  updateCourseStatus,
  getClientCourseProvider,
} from 'db/providers/clientCourseProvider';
import { getUserProvider, removeFromPendingFieldCourses } from 'db/providers/userProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { IUser } from 'interfaces/Ientities/Iusers';
import { TCourseLocals } from 'interfaces/Imiddlewares/Imiddlewares';

const declinePendingCourse = async (
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
      throw new BadRequestError(`Can't decline course with status: ${status}.`);
    }

    const { _id: manager }: IUser = await getUserProvider(managerId);
    const clientCourse = await getClientCourseProvider(clientCourseId);
    await updateCourseStatus(clientCourseId, CourseStatus.rejected);
    await removeFromPendingFieldCourses(manager, clientCourse._id);

    await updateApplyDate(clientCourseId);
    results.updateStatus = 'Course was declined.';
    next();
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;
