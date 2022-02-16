import { NextFunction, Request, Response } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import { TCourses } from 'interfaces/Ientities/Icourses';
import { IQueryCourses } from 'interfaces/ICourses/IQueryCourses';

const getAllCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const params: IQueryCourses = req.query;
    const allCourses: TCourses = await getCoursesProvider({ ...params });
    res.json(allCourses);
  } catch (error) {
    next(error);
  }
};

export default getAllCourses;
