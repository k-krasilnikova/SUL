import { NextFunction } from 'express';

import { TPassTestRequest, TPassTestResponse } from 'interfaces/requests/tests/passTest';
import { CLIENT_COURSE_FIELDS, PASS_THRESHOLD } from 'config/constants';
import {
  getAssessmentProvider,
  getClientCourseProvider,
  updateClientCourseField,
} from 'db/providers/clientCourseProvider';
import { getTrueAnswersProvider } from 'db/providers/testProvider';
import CourseStatus from 'enums/courses';
import { TestStatus } from 'enums/common';
import { isTestAvailableByDate } from 'utils/validation/tests';
import { BadRequestError } from 'classes/errors/clientErrors';

import { checkTestResults, countTestResult } from './utils/helpers';

const passTest = async (req: TPassTestRequest, res: TPassTestResponse, next: NextFunction) => {
  try {
    const { testId, answers, clientCourseId } = req.body;

    const { status, finishTestDate } = await getClientCourseProvider(clientCourseId);

    if (!status || status !== CourseStatus.testing) {
      throw new BadRequestError('Testing was not started yet.');
    }

    const isTestAvailable = isTestAvailableByDate(finishTestDate);
    if (!isTestAvailable) {
      await updateClientCourseField(
        clientCourseId,
        CLIENT_COURSE_FIELDS.status,
        CourseStatus.failed,
      );
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

    await updateClientCourseField(
      clientCourseId,
      CLIENT_COURSE_FIELDS.testResult,
      testResultWithAnswers,
    );

    const result = countTestResult(userWrongAnswers, correctAnswers.questions);
    if (result < PASS_THRESHOLD) {
      res.locals.result = { result, testStatus: TestStatus.notPassed };
      await updateClientCourseField(
        clientCourseId,
        CLIENT_COURSE_FIELDS.status,
        CourseStatus.failed,
      );

      next();
    } else {
      const assessmentRequired = await getAssessmentProvider(clientCourseId);
      res.locals.result = {
        result,
        testStatus: assessmentRequired ? TestStatus.assessment : TestStatus.successful,
      };
      await updateClientCourseField(
        clientCourseId,
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
