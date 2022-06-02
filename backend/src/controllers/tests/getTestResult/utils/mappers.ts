import { PERCENTS, TWO_DIGITS } from 'config/constants';
import { IClientCourse } from 'interfaces/entities/clientCourses';
import { ITestResultResponse } from 'interfaces/response/response';

const mapTestResult = (testResult: IClientCourse['testResult']): ITestResultResponse => {
  const answers = testResult.map((question) => ({ qN: question.qN, isCorrect: question.aN }));
  const percentage =
    parseFloat(
      (answers.filter((answer) => answer.isCorrect).length / answers.length).toFixed(TWO_DIGITS),
    ) * PERCENTS;

  const response: ITestResultResponse = { answers, percentage };

  return response;
};

export { mapTestResult };
