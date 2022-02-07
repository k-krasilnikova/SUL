import { getTrueAnswersProvider } from 'db/providers/testProvider';
import { Request, Response } from 'express';

import { TMiddlewareCall } from 'interfaces/commonMiddleware';
import { isError } from 'utils/typeGuards/isError';
import { checkTestResults, countTestResult, IAnswer } from 'utils/userTests/userTests';

const getTestResults = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string; answers: IAnswer[] }>,
  res: Response,
  next: TMiddlewareCall,
) => {
  try {
    const { id: testId, answers } = req.body;
    const correctAnswers = await getTrueAnswersProvider(testId);
    const userWrongAnswers = checkTestResults(answers, correctAnswers.questions);
    const result = countTestResult(userWrongAnswers, correctAnswers.questions);
    if (result < 0.7) {
      res.json({ result, status: 'failed' });
      return;
    }
    res.locals.result = result;
    next(res);
  } catch (err) {
    if (isError(err)) {
      next(err);
    }
  }
};

export default getTestResults;
