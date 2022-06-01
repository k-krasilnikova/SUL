import { TWO_DIGITS } from 'config/constants';
import { IAnswer, TCorrectAnswers } from 'interfaces/Ientities/Itest';

const checkTestResults = (
  userAnswers: IAnswer[],
  trueAnswers: TCorrectAnswers<IAnswer, 'aN', 'correctAnswer'>[],
): IAnswer[] => {
  const userAnswersSorted = [...userAnswers].sort(
    (currAnswer, nextAnswer) => currAnswer.qN - nextAnswer.qN,
  );
  const wrongAnswers = [];
  for (let i = 0; i < trueAnswers.length; i += 1) {
    if (!userAnswersSorted[i] || userAnswersSorted[i].aN !== trueAnswers[i].correctAnswer) {
      wrongAnswers.push(userAnswersSorted[i]);
    }
  }
  return wrongAnswers;
};

const countTestResult = (
  wrongAnswers: IAnswer[],
  trueAnswers: TCorrectAnswers<IAnswer, 'aN', 'correctAnswer'>[],
): number => {
  const pureAnswers = trueAnswers.length - wrongAnswers.length;
  return parseFloat((pureAnswers / trueAnswers.length).toFixed(TWO_DIGITS));
};

export { checkTestResults, countTestResult, IAnswer };
