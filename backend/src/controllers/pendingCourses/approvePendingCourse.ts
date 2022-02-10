import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { getClientCourseProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

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
    const { status }: IClientCourse = await getClientCourseProvider(clientCourseId);
    if (status !== CourseStatus.rejected) {
      await updateCourseStatus(clientCourseId, CourseStatus.approved);
      res.json('Course was approved');
    } else {
      res.json(`Can't approve course with status: ${status}`);
    }
  } catch (error) {
    next(error);
  }
};

export default approvePendingCourse;
