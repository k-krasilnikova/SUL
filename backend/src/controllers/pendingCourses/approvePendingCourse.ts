import { NextFunction, Request, Response } from 'express';

import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const approvePendingCourse = async (
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
      throw new BadRequestError(`Can't approve course in status: ${status}`);
    }
    await updateCourseStatus(clientCourseId, CourseStatus.approved);
    results.updateStatus = 'Course was approved';
    next();
    return;
  } catch (error) {
    next(error);
  }
};

export default approvePendingCourse;
