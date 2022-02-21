import { NextFunction, Request, Response } from 'express';

import { TLocalsManager } from 'interfaces/IResponse/IResponse';

const adapterManager = async (
  req: Request<Record<string, string | undefined>, Record<string, never>, { id: string }>,
  res: Response<never, TLocalsManager>,
  next: NextFunction,
) => {
  try {
    const { id: managerId } = res.locals;
    const { id: employeeId } = req.params;
    const { id: courseId } = req.body;
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
