import { NextFunction, Request, Response } from 'express';
import { isEmpty } from 'lodash';

import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { getTestProvider } from 'db/providers/testProvider';
import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import CourseStatus from 'enums/coursesEnums';
import { isTestAvailableByDate } from 'utils/validation/tests';

const getTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status: courseStatus, finishTestDate } = await getClientCourseProvider(clientCourseId);

    if (courseStatus !== CourseStatus.testing) {
      throw new BadRequestError(`Failed: can not get test with status: ${courseStatus}.`);
    }

    if (!isTestAvailableByDate(finishTestDate)) {
      throw new BadRequestError('Your test is disabled.');
    }

    const test = await getTestProvider(clientCourseId);
    if (isEmpty(test)) {
      throw new NotFoundError('No tests found.');
    }

    res.json(test);
  } catch (err) {
    next(err);
  }
};

export default getTest;
