import { NextFunction } from 'express';
import { isEmpty } from 'lodash';

import {
  TGetTestResultRequest,
  TGetTestResultResponse,
} from 'interfaces/requests/tests/getTestResult';
import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { BadRequestError } from 'classes/errors/clientErrors';
import { mapTestResult } from './utils/mappers';

const getTestResult = async (
  req: TGetTestResultRequest,
  res: TGetTestResultResponse,
  next: NextFunction,
) => {
  try {
    const { id: clientCourseId } = req.params;
    const { id: userId } = res.locals;

    const course = await getClientCourseProvider(clientCourseId);

    if (String(course.user) !== userId) {
      throw new BadRequestError('Test does not belong to user.');
    }

    const { testResult } = course;

    if (isEmpty(testResult)) {
      throw new BadRequestError(`Test hasn't been passed yet.`);
    }

    const testResultResponse = mapTestResult(testResult);

    res.locals.results = testResultResponse;

    next();
  } catch (error) {
    next(error);
  }
};

export default getTestResult;
