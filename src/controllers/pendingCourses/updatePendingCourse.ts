import { NextFunction, Request, Response } from 'express';

import { IUser } from 'interfaces/Ientities/Iusers';
import { getUserProvider, updatePendingFieldCourses } from 'db/providers/userProvider';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { TCourseLocals } from 'interfaces/Imiddlewares/Imiddlewares';
import { USER_ROLES } from '../../config/constants';

const updatePendingCourse = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string }>,
  res: Response<never, TCourseLocals>,
  next: NextFunction,
) => {
  try {
    const { clientCourseId, userId } = res.locals;
    if (!clientCourseId || !userId) {
      throw new BadRequestError('Invalid query');
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