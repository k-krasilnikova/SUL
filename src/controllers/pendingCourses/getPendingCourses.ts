import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { IUser } from 'interfaces/Ientities/Iusers';
import { getPendingCoursesProvider } from 'db/providers/pendingCoursesProvider';

const getPendingCourses = async (req: Request, res: Response, next: TMiddlewareCall) => {
  const { id: userId } = res.locals;
  try {
    if (typeof userId === 'string') {
      const user: IUser = await getPendingCoursesProvider(userId);
      res.json(user.pendingCourses);
    }
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getPendingCourses;
