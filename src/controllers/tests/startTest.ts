import { NextFunction, Request, Response } from 'express';

import {
  getClientCourseProvider,
  getCurrentProgress,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { REQUIRED_PCT } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { checkTestDate } from 'utils/validation/checkTestDate';

const startTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status: courseStatus, testDate } = await getClientCourseProvider(clientCourseId);
    const [{ currProgress: currentProgress }] = await getCurrentProgress(clientCourseId);

    if (courseStatus !== CourseStatus.started) {
      throw new BadRequestError(
        `Failed: can not start testing course with status: ${courseStatus}.`,
      );
    }

    if (currentProgress < REQUIRED_PCT) {
      throw new BadRequestError("Can not start test till course stages haven't been passed.");
    }

    if (testDate && !checkTestDate(testDate)) {
      throw new BadRequestError('Your test is disabled.');
    }

    await updateClientCourseField(clientCourseId, 'status', CourseStatus.testing);
    res.json('Test has been started successfully.');
  } catch (err) {
    next(err);
  }
};

export default startTest;
