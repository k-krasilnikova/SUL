import { NextFunction, Request, Response } from 'express';

import {
  getClientCourseProvider,
  getCurrentProgress,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { CLIENT_COURSE_FIELDS, REQUIRED_PCT } from 'config/constants';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { checkTestDate } from 'utils/validation/checkTestDate';
import { generateStartAndFinishTestDates } from 'utils/date/testDate';
import { getTestProvider } from 'db/providers/testProvider';

const startTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status: courseStatus, finishTestDate } = await getClientCourseProvider(clientCourseId);
    const [{ currProgress: currentProgress }] = await getCurrentProgress(clientCourseId);

    if (courseStatus !== CourseStatus.started) {
      throw new BadRequestError(
        `Failed: can not start testing course with status: ${courseStatus}.`,
      );
    }

    if (currentProgress < REQUIRED_PCT) {
      throw new BadRequestError("Can not start test till course stages haven't been passed.");
    }

    if (finishTestDate && !checkTestDate(finishTestDate)) {
      throw new BadRequestError('Your test is disabled.');
    }

    const [
      {
        test: { timeout: testTimeSeconds },
      },
    ] = await getTestProvider(clientCourseId);

    const [startTestDate, estimateFinishTestDate] =
      generateStartAndFinishTestDates(testTimeSeconds);

    await updateClientCourseField(
      clientCourseId,
      CLIENT_COURSE_FIELDS.startTestDate,
      startTestDate,
    );
    await updateClientCourseField(
      clientCourseId,
      CLIENT_COURSE_FIELDS.finishTestDate,
      estimateFinishTestDate,
    );
    await updateClientCourseField(
      clientCourseId,
      CLIENT_COURSE_FIELDS.status,
      CourseStatus.testing,
    );

    res.json('Test has been started successfully.');
  } catch (err) {
    next(err);
  }
};

export default startTest;
