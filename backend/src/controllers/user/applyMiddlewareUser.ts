import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';

const applyMiddlewareUser = async (
  req: Request<Record<string, string>, Record<string, never>, { id: string }>,
  res: Response<
    unknown,
    {
      id: string;
      courseId: string | undefined;
      userId: string | undefined;
    }
  >,
  next: TMiddlewareCall,
) => {
  try {
    const { id: userId } = res.locals;
    const { id: courseId } = req.params;
    res.locals.courseId = courseId;
    res.locals.userId = userId;
    next();
  } catch (error) {
    if (isError(error)) {
      next(error);
    }
  }
};

export default applyMiddlewareUser;
