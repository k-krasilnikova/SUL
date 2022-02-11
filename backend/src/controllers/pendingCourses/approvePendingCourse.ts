import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

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
    const courseStatus = await getStatusProvider(clientCourseId);
    if (courseStatus?.status !== CourseStatus.rejected) {
      await updateCourseStatus(clientCourseId, CourseStatus.approved);
      return res.json('Course was approved');
    }
    throw new BadRequestError(`Can't approve course`);
  } catch (error) {
    return next(error);
  }
};

export default approvePendingCourse;
