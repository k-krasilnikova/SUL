interface IAnswer {
  qN: number;
  aN: number;
}

type TCorrectAnswers<T, K extends keyof T, R extends PropertyKey> = Omit<T, K> & { [P in R]: T[K] };

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
  return pureAnswers / trueAnswers.length;
};

export { checkTestResults, countTestResult, IAnswer };
