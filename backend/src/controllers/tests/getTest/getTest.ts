import { NextFunction } from 'express';
import { isEmpty } from 'lodash';

import { TGetTestRequest, TGetTestResponse } from 'interfaces/requests/tests/getTest';
import { getTestProvider } from 'db/providers/testProvider';
import {
  getClientCourseProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/courses';
import { isTestAvailableByDate } from 'utils/validation/tests';
import { CLIENT_COURSE_FIELDS } from 'config/constants';
import { BadRequestError, NotFoundError } from 'classes/errors/clientErrors';

const getTest = async (req: TGetTestRequest, res: TGetTestResponse, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;

    const { status: courseStatus, finishTestDate } = await getClientCourseProvider(clientCourseId);

    if (courseStatus !== CourseStatus.testing) {
      throw new BadRequestError(`Failed: can not get test with status: ${courseStatus}.`);
    }

    if (!isTestAvailableByDate(finishTestDate)) {
      await updateClientCourseField(
        clientCourseId,
        CLIENT_COURSE_FIELDS.status,
        CourseStatus.failed,
      );
      throw new BadRequestError('Your test is disabled.');
    }

    const test = await getTestProvider(clientCourseId);
    if (isEmpty(test)) {
      throw new NotFoundError('Tests not found.');
    }

    res.json(test);
  } catch (err) {
    next(err);
  }
};

export default getTest;
