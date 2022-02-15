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
  attempts: number;
}

type TAchievments = {
  newSkills: Array<string | undefined>;
  updatedSkills: Array<string | undefined>;
};

type TestRuslt = { result: number; testStatus: string };

type TestDb = { test: ITest };

export { ITest, TestDb, TestRuslt, TAchievments };
