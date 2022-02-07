import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { IUser } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';

const getPendingCourses = async (req: Request, res: Response, next: TMiddlewareCall) => {
  const { id: userId } = res.locals;
  try {
    const user: IUser = await getPendingCoursesProvider(userId);
    res.json(user.pendingCourses);
  } catch (error) {
    next(error);
  }
};

export default getPendingCourses;
