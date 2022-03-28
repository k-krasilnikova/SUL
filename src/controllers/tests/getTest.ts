import { NextFunction, Request, Response } from 'express';

import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { getTestProvider } from 'db/providers/testProvider';
import { checkTestDate } from 'utils/validation/checkTestDate';
import CourseStatus from 'enums/coursesEnums';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { getClientCourseProvider } from 'db/providers/clientCourseProvider';

const getTest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: clientCourseId } = req.params;
    const { status: courseStatus, testDate } = await getClientCourseProvider(clientCourseId);

    if (courseStatus !== CourseStatus.testing) {
      throw new BadRequestError(`Failed: can not get test with status: ${courseStatus}.`);
    }

    if (testDate && !checkTestDate(testDate)) {
      throw new BadRequestError('Your test is disabled.');
    }

    const test = await getTestProvider(clientCourseId);
    if (!test.length) {
      throw new NotFoundError('No tests found.');
    }
    res.json(test);
  } catch (err) {
    next(err);
  }
};

export default getTest;
