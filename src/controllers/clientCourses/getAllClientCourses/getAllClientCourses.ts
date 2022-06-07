import { NextFunction } from 'express';

import {
  TGetClientCoursesRequest,
  TGetClientCoursesResponse,
} from 'interfaces/requests/clientCourses/getAllClientCourses';
import { getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { parseCourseQuery } from 'utils/parseQuery/parseCoursesFilters';

const getClientCourses = async (
  req: TGetClientCoursesRequest,
  res: TGetClientCoursesResponse,
  next: NextFunction,
) => {
  try {
    const { complexity, order, pageN, ...params } = req.query;
    const { id: userId } = res.locals;
    const parsedFilters = parseCourseQuery({ complexity, order, pageN });
    const clientCourses = await getClientCoursesProvider(userId, {
      ...parsedFilters,
      ...params,
    });

    res.json(clientCourses);
  } catch (err) {
    next(err);
  }
};

export default getClientCourses;
