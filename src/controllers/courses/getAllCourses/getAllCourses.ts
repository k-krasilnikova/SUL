import { NextFunction } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import {
  TGetAllCoursesRequest,
  TGetAllCoursesResponse,
} from 'interfaces/requests/courses/getAllCourses';

const getAllCourses = async (
  req: TGetAllCoursesRequest,
  res: TGetAllCoursesResponse,
  next: NextFunction,
) => {
  try {
    const { complexity, ...params } = req.query;
    const { id: userId } = res.locals;
    const complexityNumber = complexity && complexity.map((param) => +param);
    const allCourses = await getCoursesProvider(
      { complexity: complexityNumber, ...params },
      userId,
    );
    res.json(allCourses);
  } catch (error) {
    next(error);
  }
};

export default getAllCourses;
