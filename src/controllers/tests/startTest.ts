import { NextFunction, Request, Response } from 'express';

import {
  getCurrentProgress,
  getStatusProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { REQUIRED_PCT } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const startTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status: courseStatus } = await getStatusProvider(clientCourseId);
    const [{ currProgress: currentProgress }] = await getCurrentProgress(clientCourseId);

    if (courseStatus !== CourseStatus.started) {
      throw new BadRequestError(
        `Failed: can not start testing course with status: ${courseStatus}.`,
      );
    }

    if (currentProgress < REQUIRED_PCT) {
      throw new BadRequestError("Can not start test till course stages haven't been passed.");
    }

    await updateClientCourseField(clientCourseId, 'status', CourseStatus.testing);
    res.json('Test has been started successfully.');
  } catch (err) {
    next(err);
  }
};

export default startTest;
