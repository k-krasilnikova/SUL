import { Request, Response } from 'express';

import { getCoursesProvider } from 'db/providers/courseProvider';
import { TCourses } from 'interfaces/Ientities/Icourses';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { IQueryCourses } from 'interfaces/ICourses/IQueryCourses';

const getAllCourses = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const params: IQueryCourses = req.query;
    const allCourses: TCourses = await getCoursesProvider({ ...params });
    res.json(allCourses);
  } catch (error) {
    next(error);
  }
};

export default getAllCourses;