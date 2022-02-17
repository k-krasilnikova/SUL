import { NextFunction, Request, Response } from 'express';

const applyMiddlewareManager = async (
  req: Request<Record<string, string | undefined>, Record<string, never>, { id: string }>,
  res: Response<
    never,
    {
      id: string;
      courseId: string | undefined;
      userId: string | undefined;
      managerId: string | undefined;
    }
  >,
  next: NextFunction,
) => {
  try {
    const { id: managerId } = res.locals;
    const { id: employeeId } = req.params;
    const { id: courseId } = req.body;
    res.locals.courseId = courseId;
    res.locals.userId = employeeId;
    res.locals.managerId = managerId;
    next();
  } catch (error) {
    next(error);
  }
};

export default applyMiddlewareManager;
