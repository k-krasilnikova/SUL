import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import CourseStatus from 'enums/coursesEnums';
import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';

const finishCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status } = await getStatusProvider(clientCourseId);
    if (status !== CourseStatus.successful) {
      res.json({ message: 'you don`t pass the test' });
      return;
    }
    await updateCourseStatus(clientCourseId, CourseStatus.completed);
    res.json({ finish: true });
  } catch (err) {
    next(err);
  }
};

export default finishCourse;
