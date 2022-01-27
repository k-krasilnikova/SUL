interface ITest {
  _id?: string;
  title: string;
  questions: Array<{
    question: string;
    answers: { variant: string; isCorrect: boolean };
  }>;
  timeout: number;
}

type TestDb = { test: ITest };

export { ITest, TestDb };
