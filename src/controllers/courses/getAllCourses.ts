import { NextFunction, Request, Response } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import { ICourseStatus, IQueryCourses } from 'interfaces/ICourses/IQueryCourses';

const getAllCourses = async (
  req: Request,
  res: Response<ICourseStatus[], { id: string }>,
  next: NextFunction,
) => {
  try {
    const params: IQueryCourses = req.query;
    const { id: userId } = res.locals;

    const allCourses: ICourseStatus[] = await getCoursesProvider({ ...params }, userId);

    res.json(allCourses);
  } catch (error) {
    next(error);
  }
};

export default getAllCourses;
