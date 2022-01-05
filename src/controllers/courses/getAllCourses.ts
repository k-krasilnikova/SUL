import { Request, Response } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import { isError } from 'utils/typeGuards/isError';
import { TCourses } from 'interfaces/entities/Icourses';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const getAllCourses = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const allCourses: TCourses = await getCoursesProvider();
    res.json(allCourses);
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default getAllCourses;
