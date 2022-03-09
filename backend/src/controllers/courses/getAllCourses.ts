import { NextFunction, Request, Response } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import { IQueryCourses } from 'interfaces/ICourses/IQueryCourses';

const getAllCourses = async (
  req: Request,
  res: Response<unknown, { id: string }>,
  next: NextFunction,
) => {
  try {
    const params: IQueryCourses = req.query;
    const { id: userId } = res.locals;

    const allCourses = await getCoursesProvider({ ...params }, userId);

    res.json(allCourses);
  } catch (error) {
    next(error);
  }
};

export default getAllCourses;
