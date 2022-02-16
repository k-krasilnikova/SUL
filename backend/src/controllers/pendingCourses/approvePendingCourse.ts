import { NextFunction, Request, Response } from 'express';

import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const approvePendingCourse = async (
  req: Request,
  res: Response<string, { courseId: string | undefined }>,
  next: NextFunction,
) => {
  try {
    const { courseId: clientCourseId } = res.locals;
    if (!clientCourseId) {
      throw new BadRequestError('Invalid query.');
    }
    const courseStatus = await getStatusProvider(clientCourseId);
    if (
      courseStatus?.status === CourseStatus.testing ||
      courseStatus?.status === CourseStatus.rejected ||
      courseStatus?.status === CourseStatus.started ||
      courseStatus?.status === CourseStatus.completed
    ) {
      throw new BadRequestError(`Can't approve course in status: ${courseStatus.status}`);
    }
    await updateCourseStatus(clientCourseId, CourseStatus.approved);
    res.json('Course was approved');
    return;
  } catch (error) {
    next(error);
  }
};

export default approvePendingCourse;
