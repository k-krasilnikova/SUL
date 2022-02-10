import { Params } from 'react-router';

export interface ITest {
  test: {
    title: string | undefined;
    questions: Array<{
      question: string;
      answers: { variant: string; isCorrect: boolean };
    }>;
    timeout: number | undefined;
  };
}

export interface IAnswers {
  variant: string;
  aN: number;
}

export interface IQuestionObject {
  answers: Array<{ variant: string; aN: number }>;
  question: string;
  qN: number;
}

export interface IQuestionItem {
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: {
    [key: number]: number;
  };
  questionItem?: IQuestionObject;
  stage?: number | undefined;
  maxStage?: number | undefined;
}

export interface ITestResult {
  status?: string;
  isFailed?: boolean;
  skills?: { name: string; image: string; score: number; maxScore: number }[];
}

export interface IPassingTest {
  stage: number;
  maxStage: number;
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: {
    [key: number]: number;
  };
  params: Readonly<Params<string>>;
  resultEnabled: boolean;
  stageNext: () => void;
  stageBack: () => void;
  questionStageItem: IQuestionObject;
  children?: React.ReactChild;
}
