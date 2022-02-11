import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

interface DeclinePendingCourseRequest extends Request {
  body: { id: string };
}

const declinePendingCourse = async (
  req: DeclinePendingCourseRequest,
  res: Response,
  next: TMiddlewareCall,
) => {
  const { id: clientCourseId } = req.body;
  try {
    const courseStatus = await getStatusProvider(clientCourseId);
    if (courseStatus?.status !== CourseStatus.approved) {
      await updateCourseStatus(clientCourseId, CourseStatus.rejected);
      return res.json('Course was declined');
    }
    throw new BadRequestError(`Can't decline course`);
  } catch (error) {
    return next(error);
  }
};

export default declinePendingCourse;
