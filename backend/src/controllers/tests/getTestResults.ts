import { NextFunction, Request, Response } from 'express';

import { PASS_THRESHOLD } from 'config/constants';
import { getStatusProvider, updateCourseStatus } from 'db/providers/clientCourseProvider';
import { getTrueAnswersProvider } from 'db/providers/testProvider';
import CourseStatus from 'enums/coursesEnums';
import { checkTestResults, countTestResult, IAnswer } from 'utils/userTests/userTests';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

const getTestResults = async (
  req: Request<Record<string, never>, Record<string, never>, { id: string; answers: IAnswer[] }>,
  res: Response<{ result: number; testStatus: string }, { id: string; result: number }>,
  next: NextFunction,
) => {
  try {
    const { id: testId, answers } = req.body;
    const { id: courseId } = req.params;

    const courseStatus = await getStatusProvider(courseId);
    if (!courseStatus || courseStatus?.status !== CourseStatus.testing) {
      throw new BadRequestError("Test hasn't been started.");
    }

    const correctAnswers = await getTrueAnswersProvider(testId);
    const userWrongAnswers = checkTestResults(answers, correctAnswers.questions);
    const result = countTestResult(userWrongAnswers, correctAnswers.questions);
    if (result < PASS_THRESHOLD) {
      res.json({ result, testStatus: 'not passed' });
      return;
    }
    res.locals.result = result;
    await updateCourseStatus(courseId, CourseStatus.successful);
    next();
  } catch (err) {
    next(err);
  }
};

export default getTestResults;
