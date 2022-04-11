import { NextFunction, Request, Response } from 'express';

import {
  getAssessmentProvider,
  getStatusProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { COURSE_FILEDS, PASS_THRESHOLD } from 'config/constants';
import { getTrueAnswersProvider } from 'db/providers/testProvider';
import CourseStatus from 'enums/coursesEnums';
import { checkTestResults, countTestResult, IAnswer } from 'utils/userTests/userTests';
import { TestRuslt } from 'interfaces/Ientities/Itest';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';
import { TestStatus } from 'enums/common';

const passTest = async (
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

    const testResultWithAnswers = correctAnswers.questions.map((correctAnswer) => {
      const result = userWrongAnswers.find((wrongAnswer) => correctAnswer.qN === wrongAnswer.qN);

      let resultObject;
      if (result) {
        resultObject = { qN: correctAnswer.qN, aN: false };
      } else {
        resultObject = { qN: correctAnswer.qN, aN: true };
      }
      return resultObject;
    });

    await updateClientCourseField(courseId, COURSE_FILEDS.testResult, testResultWithAnswers);

    const result = countTestResult(userWrongAnswers, correctAnswers.questions);
    if (result < PASS_THRESHOLD) {
      res.locals.result = { result, testStatus: TestStatus.notPassed };
      await updateClientCourseField(courseId, COURSE_FILEDS.status, CourseStatus.failed);
      await updateClientCourseField(courseId, COURSE_FILEDS.testDate, Date.now());
      next();
    } else {
      const assessmentRequired = await getAssessmentProvider(courseId);
      res.locals.result = {
        result,
        testStatus: assessmentRequired ? TestStatus.assessment : TestStatus.successful,
      };
      await updateClientCourseField(
        courseId,
        COURSE_FILEDS.status,
        assessmentRequired ? CourseStatus.assessment : CourseStatus.completed,
      );
      next();
    }
  } catch (err) {
    next(err);
  }
};

export default passTest;
