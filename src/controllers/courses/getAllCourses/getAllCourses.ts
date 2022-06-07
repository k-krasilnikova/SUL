import { NextFunction } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import {
  TGetAllCoursesRequest,
  TGetAllCoursesResponse,
} from 'interfaces/requests/courses/getAllCourses';
import { parseCourseQuery } from 'utils/parseQuery/parseCoursesFilters';

const getAllCourses = async (
  req: TGetAllCoursesRequest,
  res: TGetAllCoursesResponse,
  next: NextFunction,
) => {
  try {
    const { complexity, order, pageN, ...params } = req.query;
    const { id: userId } = res.locals;
    const parsedFilters = parseCourseQuery({ complexity, order, pageN });
    const allCourses = await getCoursesProvider(
      {
        ...parsedFilters,
        ...params,
      },
      userId,
    );
    res.json(allCourses);
  } catch (error) {
    next(error);
  }
};

export default getAllCourses;
