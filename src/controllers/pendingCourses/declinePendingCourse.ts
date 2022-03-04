import { NextFunction, Request, Response } from 'express';

import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const declinePendingCourse = async (
  req: Request,
  res: Response<string, { clientCourseId: string | undefined }>,
  next: NextFunction,
) => {
  try {
    const { clientCourseId } = res.locals;
    if (!clientCourseId) {
      throw new BadRequestError('Invalid query.');
    }
    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.pending) {
      throw new BadRequestError(`Can't decline course with status: ${status}`);
    }
    await updateCourseStatus(clientCourseId, CourseStatus.rejected);
    res.json('Course was declined');
    return;
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;