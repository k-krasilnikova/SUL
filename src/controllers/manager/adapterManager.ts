import { NextFunction, Request, Response } from 'express';

import { TLocalsManager } from 'interfaces/IResponse/IResponse';

const adapterManager = async (
  req: Request<
    Record<string, string | undefined>,
    Record<string, never>,
    { id: string; assessment?: boolean }
  >,
  res: Response<never, TLocalsManager>,
  next: NextFunction,
) => {
  try {
    const { id: managerId } = res.locals;
    const { id: employeeId } = req.params;
    const { id: courseId } = req.body;
    const { assessment: withAssessment } = req.body;
    res.locals.withAssessment = withAssessment;
    res.locals.courseId = courseId;
    res.locals.clientCourseId = courseId;
    res.locals.userId = employeeId;
    res.locals.managerId = managerId;
    res.locals.results = {};
    next();
  } catch (error) {
    next(error);
  }
};

export default adapterManager;
