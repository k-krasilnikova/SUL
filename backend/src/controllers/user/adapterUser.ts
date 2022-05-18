import { NextFunction } from 'express';

import {
  TApplyCourseRequest,
  TApplyCourseResponse,
} from 'interfaces/requests/clientCourses/applyCourse';

const adapterUser = async (
  req: TApplyCourseRequest,
  res: TApplyCourseResponse,
  next: NextFunction,
) => {
  try {
    const { id: userId } = res.locals;
    const { id: courseId } = req.body;
    res.locals.courseId = courseId;
    res.locals.userId = userId;
    next();
  } catch (error) {
    next(error);
  }
};

export default adapterUser;
