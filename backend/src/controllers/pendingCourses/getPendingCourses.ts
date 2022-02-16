import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongoose';

import { IPendingCourses, IUser } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';

const getPendingCourses = async (
  req: Request,
  res: Response<IPendingCourses | ObjectId[], { id: string }>,
  next: NextFunction,
) => {
  const { id: userId } = res.locals;
  try {
    const user: IUser = await getPendingCoursesProvider(userId);
    res.json(user.pendingCourses);
    next();
  } catch (error) {
    next(error);
  }
};

export default getPendingCourses;
