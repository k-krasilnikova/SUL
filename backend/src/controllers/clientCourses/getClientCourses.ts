import { Request, Response } from 'express';

import { getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const getClientCoursesById = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const courses = await getClientCoursesProvider();
    res.json(courses);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default getClientCoursesById;
