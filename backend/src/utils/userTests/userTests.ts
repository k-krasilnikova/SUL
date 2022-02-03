interface IAnswer {
  qN: number;
  aN: number;
}

const checkTestResults = (userAnswers: IAnswer[], trueAnswers: IAnswer[]) => {
  const userAnswersSorted = [...userAnswers].sort(
    (currAnswer, nextAnswer) => currAnswer.qN - nextAnswer.qN,
  );
  const wrongAnswers = [];
  for (let i = 0; i < userAnswersSorted.length; i += 1) {
    if (userAnswersSorted[i].aN !== trueAnswers[i].aN) {
      wrongAnswers.push(userAnswersSorted[i]);
    }
  }
  return wrongAnswers;
};

const countTestResult = (wrongAnswers: IAnswer[], trueAnswers: IAnswer[]) => {
  const pureAnswers = trueAnswers.length - wrongAnswers.length;
  return pureAnswers / trueAnswers.length;
};

export { checkTestResults, countTestResult };
