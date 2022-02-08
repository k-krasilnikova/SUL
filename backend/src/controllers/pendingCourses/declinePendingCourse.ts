import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';

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
    await updateCourseStatus(clientCourseId, CourseStatus.rejected);
    res.json({ status: 'Course was declined' });
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;
