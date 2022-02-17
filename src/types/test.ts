import { Params } from 'react-router';

export interface ITest {
  test: {
    _id: string;
    title: string | undefined;
    questions: {
      question: string;
      qN: number;
      answers: { variant: string; aN: number }[];
    }[];
    timeout: number;
  };
}

export interface IAnswers {
  variant: string;
  aN: number;
}

export interface IQuestionObject {
  answers: { variant: string; aN: number }[];
  question: string;
  qN: number;
}

export interface IQuestionItem {
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: {
    [key: number]: number;
  };
  questionItem: {
    question: string;
    qN: number;
    answers: {
      aN: number;
      variant: string;
    }[];
  };
  stage?: number | undefined;
  maxStage?: number | undefined;
}

export interface ITestResult {
  status?: string;
  isFailed?: boolean;
  skills?: { name: string; image: string; score: number; maxScore: number; group: string }[];
}

export interface IPassingTest {
  stage: number;
  maxStage: number;
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitResult: () => void;
  value: {
    [key: number]: number;
  };
  params: Readonly<Params<string>>;
  resultEnabled: boolean;
  stageNext: () => void;
  stageBack: () => void;
  questionStageItem: {
    question: string;
    qN: number;
    answers: {
      aN: number;
      variant: string;
    }[];
  };
  children?: React.ReactChild;
  testItem?: {
    _id: string;
    title: string | undefined;
    questions: {
      question: string;
      qN: number;
      answers: {
        aN: number;
        variant: string;
      }[];
    }[];
    timeout: number;
  };
  isLoading: boolean;
}
