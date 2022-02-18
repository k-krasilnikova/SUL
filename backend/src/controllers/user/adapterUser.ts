import { NextFunction, Request, Response } from 'express';
import { TLocalsUser } from 'interfaces/IResponse/IResponse';

const adapterUser = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string }>,
  res: Response<never, TLocalsUser>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    const { id: courseId } = req.body;
    res.locals.courseId = courseId;
    res.locals.userId = userId;
    res.locals.results = {};
    next();
  } catch (error) {
    next(error);
  }
};

export default adapterUser;
