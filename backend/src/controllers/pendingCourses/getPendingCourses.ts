import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { IPendingCourses, IUser } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';

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
    next(error);
  }
};

export default getPendingCourses;
