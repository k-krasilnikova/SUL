import { Request, Response } from 'express';

import { isError } from 'utils/typeGuards/isError';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import CourseStatus from 'enums/coursesEnums';
import { getCurrentProgress, updateCourseStatus } from 'db/providers/clientCourseProvider';
import { INITIAL_INDX, REQUIRED_PCT } from 'config/constants';

const finishCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const progress = await getCurrentProgress(clientCourseId);
    if (progress[INITIAL_INDX].currProgress < REQUIRED_PCT) {
      res.json({ message: 'you have not passed all stages in course' });
      return;
    }
    await updateCourseStatus(clientCourseId, CourseStatus.completed);
    res.json({ finish: true });
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default finishCourse;
