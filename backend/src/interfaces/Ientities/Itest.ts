interface ITest {
  title: string;
  questions: Array<{
    question: string;
    answers: { variant: string; isCorrect: boolean };
  }>;
  timeout: number;
}

export { ITest };
