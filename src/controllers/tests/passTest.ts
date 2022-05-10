import { NextFunction, Request, Response } from 'express';

import { CLIENT_COURSE_FIELDS, PASS_THRESHOLD } from 'config/constants';
import {
  getAssessmentProvider,
  getClientCourseProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { getTrueAnswersProvider } from 'db/providers/testProvider';
import CourseStatus from 'enums/coursesEnums';
import { TestStatus } from 'enums/common';
import { checkTestResults, countTestResult, IAnswer } from 'utils/userTests/userTests';
import { isTestAvailableByDate } from 'utils/validation/tests';
import { TestRuslt } from 'interfaces/Ientities/Itest';
import BadRequestError from 'classes/errors/clientErrors/BadRequestError';

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

    const { status, finishTestDate } = await getClientCourseProvider(courseId);

    if (!status || status !== CourseStatus.testing) {
      throw new BadRequestError('Testing was not started yet.');
    }
    const isTestAvailable = isTestAvailableByDate(finishTestDate);
    if (!isTestAvailable) {
      await updateClientCourseField(courseId, CLIENT_COURSE_FIELDS.status, CourseStatus.failed);
      throw new BadRequestError('Time for test has already expired.');
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

    await updateClientCourseField(courseId, CLIENT_COURSE_FIELDS.testResult, testResultWithAnswers);

    const result = countTestResult(userWrongAnswers, correctAnswers.questions);
    if (result < PASS_THRESHOLD) {
      res.locals.result = { result, testStatus: TestStatus.notPassed };
      await updateClientCourseField(courseId, CLIENT_COURSE_FIELDS.status, CourseStatus.failed);

      next();
    } else {
      const assessmentRequired = await getAssessmentProvider(courseId);
      res.locals.result = {
        result,
        testStatus: assessmentRequired ? TestStatus.assessment : TestStatus.successful,
      };
      await updateClientCourseField(
        courseId,
        CLIENT_COURSE_FIELDS.status,
        assessmentRequired ? CourseStatus.assessment : CourseStatus.completed,
      );

      next();
    }
  } catch (err) {
    next(err);
  }
};

export default passTest;
