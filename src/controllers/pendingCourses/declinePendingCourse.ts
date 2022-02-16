import { NextFunction, Request, Response } from 'express';

import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

interface DeclinePendingCourseRequest extends Request {
  body: { id: string };
}

const declinePendingCourse = async (
  req: DeclinePendingCourseRequest,
  res: Response,
  next: NextFunction,
) => {
  const { id: clientCourseId } = req.body;
  try {
    const courseStatus = await getStatusProvider(clientCourseId);
    if (
      courseStatus?.status === CourseStatus.approved ||
      courseStatus?.status === CourseStatus.testing ||
      courseStatus?.status === CourseStatus.started ||
      courseStatus?.status === CourseStatus.completed
    ) {
      throw new BadRequestError(`Can't decline course with status: ${courseStatus.status}`);
    }
    await updateCourseStatus(clientCourseId, CourseStatus.rejected);
    res.json('Course was declined');
    return;
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;
