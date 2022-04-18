import { NextFunction, Request, Response } from 'express';

import { addCourseProvider } from 'db/providers/courseProvider';
import { ICreateCourseBody } from 'interfaces/ICourses/IQueryCourses';

const addCourse = async (
  req: Request<never, never, ICreateCourseBody>,
  res: Response<never, { results: ICreateCourseBody }>,
  next: NextFunction,
) => {
  try {
    const newCourse = res.locals.results;
    await addCourseProvider(newCourse);

    next();
  } catch (error) {
    next(error);
  }
};

export default addCourse;
