import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import CourseStatus from 'enums/coursesEnums';
import { getCurrentProgress, updateCourseStatus } from 'db/providers/clientCourseProvider';
import { INITIAL_INDX, REQUIRED_PCT } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const finishCourse = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const progress = await getCurrentProgress(clientCourseId);
    if (progress[INITIAL_INDX].currProgress < REQUIRED_PCT) {
      throw new BadRequestError(
        "You can not finish course till all the stages haven't been passed.",
      );
    }
    await updateCourseStatus(clientCourseId, CourseStatus.completed);
    res.json({ finish: true });
  } catch (err) {
    next(err);
  }
};

export default finishCourse;
