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
    const params = req.query;
    const { id: userId } = res.locals;

    const clientCourses = await getClientCoursesProvider(userId, { ...params });

    res.json(clientCourses);
  } catch (err) {
    next(err);
  }
};

export default getClientCourses;
