import { TWO_DIGITS } from 'config/constants';
import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import { ITestResultResponse } from 'interfaces/IResponse/IResponse';

const normaliseTestResult = (testResult: IClientCourse['testResult']): ITestResultResponse => {
  const answers = testResult.map((question) => ({ qN: question.qN, isCorrect: question.aN }));
  const percentage = parseFloat(
    (answers.filter((answer) => answer.isCorrect).length / answers.length).toFixed(TWO_DIGITS),
  );

  const response: ITestResultResponse = { answers, percentage };

  return response;
};

export { normaliseTestResult };
