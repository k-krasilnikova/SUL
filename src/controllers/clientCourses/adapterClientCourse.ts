import { NextFunction, Request, Response } from 'express';

import { TNotification } from 'interfaces/response/response';

const adapterClientCourse = async (
  req: Request,
  res: Response<never, TNotification>,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    const { id: clientCourseId } = req.params;
    res.locals.clientCourseId = clientCourseId;
    res.locals.userId = userId;

    next();
  } catch (error) {
    next(error);
  }
};

export default adapterClientCourse;
