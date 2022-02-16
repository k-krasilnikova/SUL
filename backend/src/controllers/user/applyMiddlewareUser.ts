import { NextFunction, Request, Response } from 'express';

const applyMiddlewareUser = async (
  req: Request<Record<string, string>, Record<string, never>, { id: string }>,
  res: Response<
    void,
    {
      id: string;
      courseId: string | undefined;
      userId: string | undefined;
    }
  >,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    const { id: courseId } = req.params;
    res.locals.courseId = courseId;
    res.locals.userId = userId;
    next();
  } catch (error) {
    next(error);
  }
};

export default applyMiddlewareUser;
