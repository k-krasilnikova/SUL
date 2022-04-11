import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { getClientCourseProvider } from 'db/providers/clientCourseProvider';
import { NextFunction, Request, Response } from 'express';

import { ITestResultResponse } from 'interfaces/IResponse/IResponse';
import { normaliseTestResult } from 'utils/normaliser/tests';

const getTestResult = async (
  req: Request<{ id: string }>,
  res: Response<never, { id: string; results: ITestResultResponse }>,
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

    const testResultResponse = normaliseTestResult(testResult);

    res.locals.results = testResultResponse;

    next();
  } catch (error) {
    next(error);
  }
};

export default getTestResult;
