import { NextFunction, Request, Response } from 'express';

import { addCourseProvider } from 'db/providers/courseProvider';
import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';
import { ICourse } from 'interfaces/Ientities/Icourses';

const addCourse = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response<never, { preparedCourseData: ICreateCourseBody; results: ICourse }>,
  next: NextFunction,
) => {
  try {
    const { preparedCourseData } = res.locals;

    const newCourse = await addCourseProvider(preparedCourseData);
    res.locals.results = newCourse;
    next();
  } catch (error) {
    next(error);
  }
};

export default addCourse;
