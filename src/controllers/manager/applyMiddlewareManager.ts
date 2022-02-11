import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';

const applyMiddlewareManager = async (
  req: Request<Record<string, string>, Record<string, never>, { id: string }>,
  res: Response<
    unknown,
    {
      id: string;
      courseId: string | undefined;
      userId: string | undefined;
      managerId: string | undefined;
    }
  >,
  next: TMiddlewareCall,
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
    if (isError(error)) {
      next(error);
    }
  }
};

export default applyMiddlewareManager;
