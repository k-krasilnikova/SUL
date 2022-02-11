import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';

import { IUser } from 'interfaces/Ientities/Iusers';
import { getUserProvider, updatePendingFieldCourses } from 'db/providers/userProvider';
import { isError } from 'utils/typeGuards/isError';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const updatePandingCourse = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string }>,
  res: Response<
    { message: string } | { status: string },
    { courseId: string | undefined; userId: string | undefined }
  >,
  next: TMiddlewareCall,
) => {
  try {
    const { courseId, userId } = res.locals;
    if (!courseId || !userId) {
      throw new BadRequestError('Invalid query');
    }
    const user: IUser = await getUserProvider(userId);
    await updatePendingFieldCourses(user.managerId, courseId);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default updatePandingCourse;
