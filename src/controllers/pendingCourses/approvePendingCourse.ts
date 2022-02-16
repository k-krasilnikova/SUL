import { NextFunction, Request, Response } from 'express';

import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

interface ApprovePendingCourseRequest extends Request {
  body: { id: string };
}

const approvePendingCourse = async (
  req: ApprovePendingCourseRequest,
  res: Response,
  next: NextFunction,
) => {
  const { id: clientCourseId } = req.body;
  try {
    const courseStatus = await getStatusProvider(clientCourseId);
    if (courseStatus?.status !== CourseStatus.pending) {
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
