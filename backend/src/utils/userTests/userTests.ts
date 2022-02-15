import { IAnswer, TCorrectAnswers } from 'interfaces/Ientities/Itest';

const checkTestResults = (
  userAnswers: IAnswer[],
  trueAnswers: TCorrectAnswers<IAnswer, 'aN', 'correctAnswer'>[],
) => {
  const userAnswersSorted = [...userAnswers].sort(
    (currAnswer, nextAnswer) => currAnswer.qN - nextAnswer.qN,
  );
  const wrongAnswers = [];
  for (let i = 0; i < userAnswersSorted.length; i += 1) {
    if (userAnswersSorted[i].aN !== trueAnswers[i].correctAnswer) {
      wrongAnswers.push(userAnswersSorted[i]);
    }
  }
  return wrongAnswers;
};

const countTestResult = (
  wrongAnswers: IAnswer[],
  trueAnswers: TCorrectAnswers<IAnswer, 'aN', 'correctAnswer'>[],
) => {
  const pureAnswers = trueAnswers.length - wrongAnswers.length;
  return parseFloat((pureAnswers / trueAnswers.length).toFixed(2));
};

export { checkTestResults, countTestResult, IAnswer };
