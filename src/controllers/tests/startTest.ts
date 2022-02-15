import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import {
  getCurrentProgress,
  getStatusProvider,
  updateCourseStatus,
} from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { INITIAL_INDX, REQUIRED_PCT } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const startTest = async (req: Request, res: Response, next: TMiddlewareCall) => {
  try {
    const { id: clientCourseId } = req.params;
    const courseStatus = await getStatusProvider(clientCourseId);
    const progress = await getCurrentProgress(clientCourseId);
    if (
      courseStatus?.status === CourseStatus.rejected ||
      courseStatus?.status === CourseStatus.pending
    ) {
      if (progress[INITIAL_INDX].currProgress < REQUIRED_PCT) {
        throw new BadRequestError("Can not start test till course stages haven't been passed.");
      }
      throw new BadRequestError(
        `Failed: can not start testing course with status: ${courseStatus?.status}`,
      );
    }
    await updateCourseStatus(clientCourseId, CourseStatus.testing);
    res.json('Test started successfully ');
    return;
  } catch (err) {
    next(err);
  }
};

export default startTest;
