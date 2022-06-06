import { NextFunction } from 'express';

import {
  TGetClientCoursesRequest,
  TGetClientCoursesResponse,
} from 'interfaces/requests/clientCourses/getAllClientCourses';
import { getClientCoursesProvider } from 'db/providers/clientCourseProvider';
import { arrayValueToNumber } from 'utils/array/arrayValueToNumber';

const getClientCourses = async (
  req: TGetClientCoursesRequest,
  res: TGetClientCoursesResponse,
  next: NextFunction,
) => {
  try {
    const { complexity, ...params } = req.query;
    const { id: userId } = res.locals;
    const complexityParsed = complexity && arrayValueToNumber(complexity);
    const clientCourses = await getClientCoursesProvider(userId, {
      complexity: complexityParsed,
      ...params,
    });

    res.json(clientCourses);
  } catch (err) {
    next(err);
  }
};

export default getClientCourses;
