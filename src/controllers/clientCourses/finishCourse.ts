import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import CourseStatus from 'enums/coursesEnums';
import { updateCourseStatus } from 'db/providers/clientCourseProvider';

const finishCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    await updateCourseStatus(clientCourseId, CourseStatus.completed);
    res.json({ finish: true });
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default finishCourse;
