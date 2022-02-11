import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';

import { IPendingCourses, IUser } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const getPendingCourses = async (
  req: Request,
  res: Response<IPendingCourses | ObjectId[], { id: string }>,
  next: TMiddlewareCall,
) => {
  const { id: userId } = res.locals;
  try {
    const user: IUser = await getPendingCoursesProvider(userId);
    res.json(user.pendingCourses);
    next();
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getPendingCourses;
