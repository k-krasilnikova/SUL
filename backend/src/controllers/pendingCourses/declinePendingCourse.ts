import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { getClientCourseProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

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
    const { status }: IClientCourse = await getClientCourseProvider(clientCourseId);
    if (status !== CourseStatus.approved) {
      await updateCourseStatus(clientCourseId, CourseStatus.rejected);
      res.json('Course was declined');
    } else {
      res.json(`Can't decline course with status: ${status}`);
    }
  } catch (error) {
    next(error);
  }
};

export default declinePendingCourse;
