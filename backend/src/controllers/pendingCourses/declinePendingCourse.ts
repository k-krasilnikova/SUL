import { NextFunction, Request, Response } from 'express';

import {
  getStatusProvider,
  updateApplyDate,
  updateCourseStatus,
} from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const declinePendingCourse = async (
  req: Request,
  res: Response<
    never,
    { clientCourseId: string | undefined; results: Record<'updateStatus', string> }
  >,
  next: NextFunction,
) => {
  try {
    const { clientCourseId, results } = res.locals;
    if (!clientCourseId) {
      throw new BadRequestError('Invalid query.');
    }
    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.pending) {
      throw new BadRequestError(`Can't decline course with status: ${status}`);
    }
    await updateCourseStatus(clientCourseId, CourseStatus.rejected);
    await updateApplyDate(clientCourseId);
    results.updateStatus = 'Course was declined';
    next();
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;
