import { Request, Response } from 'express';

import { PASS_THRESHOLD } from 'config/constants';
import { getStatusProvider } from 'db/providers/clientCourseProvider';
import { getTrueAnswersProvider } from 'db/providers/testProvider';
import CourseStatus from 'enums/coursesEnums';
import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';
import { checkTestResults, countTestResult, IAnswer } from 'utils/userTests/userTests';

const getTestResults = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string; answers: IAnswer[] }>,
  res: Response<unknown, { id: string; result: number }>,
  next: TMiddlewareCall,
) => {
  try {
    const { id: testId, answers } = req.body;
    const { id: courseId } = req.params;
    const courseStatus = await getStatusProvider(courseId);
    if (courseStatus?.status !== CourseStatus.testing) {
      res.json({ message: 'test is not started' });
      return;
    }
    const correctAnswers = await getTrueAnswersProvider(testId);
    const userWrongAnswers = checkTestResults(answers, correctAnswers.questions);
    const result = countTestResult(userWrongAnswers, correctAnswers.questions);
    if (result < PASS_THRESHOLD) {
      res.json({ result, status: 'not passed' });
      return;
    }
    res.locals.result = result;
    next();
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default getTestResults;
