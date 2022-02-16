interface ITest {
  _id?: string;
  title: string;
  questions: Array<{
    qN: number;
    question: string;
    answers: { variant: string; aN: number }[];
    correctAnswer: number;
  }>;
  timeout: number;
}

type TestDb = { test: ITest };

interface IAnswer {
  qN: number;
  aN: number;
}

type TCorrectAnswers<T, K extends keyof T, R extends PropertyKey> = Omit<T, K> & { [P in R]: T[K] };

export { ITest, TestDb, IAnswer, TCorrectAnswers };
