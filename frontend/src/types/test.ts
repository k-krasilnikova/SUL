import { Params } from 'react-router';

export interface ITestResponse {
  test: ITestItem;
}

export interface ITestItem {
  _id: string;
  title: string | undefined;
  questions: {
    question: string;
    qN: number;
    answers: IAnswer[];
  }[];
  timeout: number;
}

export interface IAnswer {
  variant: string;
  aN: number;
}

export interface IQuestionObject {
  qN: number;
  question: string;
  answers: IAnswer[];
}

export interface IQuestionProps {
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: {
    [key: number]: number;
  };
  questionItem: IQuestionObject;
  stage?: number | undefined;
  maxStage?: number | undefined;
}

export interface ISkills {
  name: string;
  image: string;
  score: number;
  maxScore: number;
  group: string;
}

export interface ITestResult {
  status?: string;
  isFailed?: boolean;
  skills?: ISkills[];
  testResultResponse?: any;
}

export interface IPassingTestProps {
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
  questionStageItem: IQuestionObject;
  children?: React.ReactChild;
  testItem?: ITestItem;
  isLoading: boolean;
}
