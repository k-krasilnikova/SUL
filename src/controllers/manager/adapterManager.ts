import { NextFunction } from 'express';

import {
  TApprovePendingCourseRequest,
  TApprovePendingCourseResponse,
} from 'interfaces/requests/pendingCourses/approvePendingCourse';

const adapterManager = async (
  req: TApprovePendingCourseRequest,
  res: TApprovePendingCourseResponse,
  next: NextFunction,
) => {
  try {
    const { id: managerId } = res.locals;
    const { id: courseId } = req.body;
    const { assessment: withAssessment } = req.body;
    res.locals.withAssessment = withAssessment;
    res.locals.clientCourseId = courseId;
    res.locals.managerId = managerId;
    res.locals.userId = managerId;
    res.locals.results = {};
    next();
  } catch (error) {
    next(error);
  }
};

export default adapterManager;
