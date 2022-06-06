import { NextFunction } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import {
  TGetAllCoursesRequest,
  TGetAllCoursesResponse,
} from 'interfaces/requests/courses/getAllCourses';
import { arrayValueToNumber } from 'utils/array/arrayValueToNumber';

const getAllCourses = async (
  req: TGetAllCoursesRequest,
  res: TGetAllCoursesResponse,
  next: NextFunction,
) => {
  try {
    const { complexity, ...params } = req.query;
    const { id: userId } = res.locals;
    const complexityParsed = complexity && arrayValueToNumber(complexity);
    const allCourses = await getCoursesProvider(
      { complexity: complexityParsed, ...params },
      userId,
    );
    res.json(allCourses);
  } catch (error) {
    next(error);
  }
};

export default getAllCourses;
