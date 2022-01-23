import { Request, Response } from 'express';

import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';

const getClientCourseById = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const courses = await getClientCourseProvider(clientCourseId);
    res.json(courses);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default getClientCourseById;
