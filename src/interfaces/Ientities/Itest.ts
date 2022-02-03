interface ITest {
  _id?: string;
  title: string;
  questions: Array<{
    qN: number;
    question: string;
    answers: { variant: string; isCorrect: boolean; aN: number };
  }>;
  timeout: number;
}

type TestDb = { test: ITest };

export { ITest, TestDb };
