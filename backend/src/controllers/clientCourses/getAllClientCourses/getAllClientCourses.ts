import { NextFunction } from 'express';

import {
  TGetClientCoursesRequest,
  TGetClientCoursesResponse,
} from 'interfaces/requests/clientCourses/getAllClientCourses';
import { getClientCoursesProvider } from 'db/providers/clientCourseProvider';

const getClientCourses = async (
  req: TGetClientCoursesRequest,
  res: TGetClientCoursesResponse,
  next: NextFunction,
) => {
  try {
    const { complexity, ...params } = req.query;
    const { id: userId } = res.locals;
    const complexityNumber = complexity && complexity.map((param) => +param);
    console.log(params, userId);
    const clientCourses = await getClientCoursesProvider(userId, {
      complexity: complexityNumber,
      ...params,
    });

    res.json(clientCourses);
  } catch (err) {
    next(err);
  }
};

export default getClientCourses;
