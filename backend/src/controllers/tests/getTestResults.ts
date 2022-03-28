import { NextFunction, Request, Response } from 'express';

import { PASS_THRESHOLD } from 'config/constants';
import {
  getAssessmentProvider,
  getStatusProvider,
  updateCourseStatus,
} from 'db/providers/clientCourseProvider';
import { getTrueAnswersProvider } from 'db/providers/testProvider';
import CourseStatus from 'enums/coursesEnums';
import { checkTestResults, countTestResult, IAnswer } from 'utils/userTests/userTests';
import { TestRuslt } from 'interfaces/Ientities/Itest';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { TestStatus } from 'enums/common';

const getTestResults = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    { testId: string; answers: IAnswer[] }
  >,
  res: Response<never, { id: string; result: TestRuslt }>,
  next: NextFunction,
) => {
  try {
    const { testId, answers } = req.body;
    const { id: courseId } = req.params;

    const courseStatus = await getStatusProvider(courseId);
    if (!courseStatus || courseStatus?.status !== CourseStatus.testing) {
      throw new BadRequestError("Test hasn't been started.");
    }

    const correctAnswers = await getTrueAnswersProvider(testId);
    const userWrongAnswers = checkTestResults(answers, correctAnswers.questions);
    const result = countTestResult(userWrongAnswers, correctAnswers.questions);
    if (result < PASS_THRESHOLD) {
      res.locals.result = { result, testStatus: TestStatus.notPassed };
      await updateCourseStatus(courseId, CourseStatus.started);
      next();
      return;
    }

    const assessmentRequired = await getAssessmentProvider(courseId);
    res.locals.result = {
      result,
      testStatus: assessmentRequired ? TestStatus.assessment : TestStatus.successful,
    };
    await updateCourseStatus(
      courseId,
      assessmentRequired ? CourseStatus.assessment : CourseStatus.successful,
    );
    next();
  } catch (err) {
    next(err);
  }
};

export default getTestResults;
