import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';

interface ApprovePendingCourseRequest extends Request {
  body: { id: string };
}

const approvePendingCourse = async (
  req: ApprovePendingCourseRequest,
  res: Response,
  next: TMiddlewareCall,
) => {
  const { id: clientCourseId } = req.body;
  try {
    await updateCourseStatus(clientCourseId, CourseStatus.approved);
    res.json({ status: 'Course was approved' });
  } catch (error) {
    next(error);
  }
};

export default approvePendingCourse;
