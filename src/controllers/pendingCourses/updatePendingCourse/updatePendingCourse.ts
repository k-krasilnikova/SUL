import { NextFunction } from 'express';

import {
  TApprovePendingCourseRequest,
  TApprovePendingCourseResponse,
} from 'interfaces/requests/pendingCourses/approvePendingCourse';
import { IUser } from 'interfaces/Ientities/Iusers';
import { getUserProvider, updatePendingFieldCourses } from 'db/providers/userProvider';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { USER_ROLES } from 'config/constants';

const updatePendingCourse = async (
  req: TApprovePendingCourseRequest,
  res: TApprovePendingCourseResponse,
  next: NextFunction,
) => {
  try {
    const { clientCourseId, userId } = res.locals;

    if (!clientCourseId) {
      throw new BadRequestError('Invalid query. Client course id or user id is missing.');
    }
    if (!userId) {
      throw new BadRequestError('Invalid query. User id is missing.');
    }

    const { managerId, role }: IUser = await getUserProvider(userId);
    if (role === USER_ROLES.EMPLOYEE) {
      await updatePendingFieldCourses(managerId, clientCourseId);
    }

    next();
  } catch (err) {
    next(err);
  }
};

export default updatePendingCourse;
