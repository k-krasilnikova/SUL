import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { IPendingCourses, IUser } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';
import { ObjectId } from 'mongoose';

const getPendingCourses = async (
  req: Request,
  res: Response<IPendingCourses | ObjectId[], { id: string }>,
  next: TMiddlewareCall,
) => {
  const { id: userId } = res.locals;
  try {
    const user: IUser = await getPendingCoursesProvider(userId);
    res.json(user.pendingCourses);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getPendingCourses;
