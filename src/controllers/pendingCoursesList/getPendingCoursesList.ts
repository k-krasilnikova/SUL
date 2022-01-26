import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { IPendingCourse } from '../../interfaces/IPendingCoursesList/IPendingCourse';
import { getCoursesProvider } from '../../db/providers/pendingCoursesProvider';

const getAllCourses = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: userId } = req.query;
    if (typeof userId === 'string') {
      const pendingCoursesList: IPendingCourse[] = await getCoursesProvider(userId);
      res.json(pendingCoursesList);
    }
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getAllCourses;
