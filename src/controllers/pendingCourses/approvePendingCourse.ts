import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const approvePendingCourse = async (
  req: Request,
  res: Response<unknown, { courseId: string | undefined }>,
  next: TMiddlewareCall,
) => {
  try {
    const { courseId: clientCourseId } = res.locals;
    if (!clientCourseId) {
      throw new BadRequestError('Invalid query.');
    }
    await updateCourseStatus(clientCourseId, CourseStatus.approved);
    res.json({ status: 'Course was approved' });
  } catch (error) {
    next(error);
  }
};

export default approvePendingCourse;
