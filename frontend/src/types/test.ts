import { Params } from 'react-router';

export interface ITestResponse {
  test: ITestItem;
  testResponse?: any;
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

export interface IResponseData {
  newSkills: [];
  result: {
    result: number;
    testStatus: string;
  };
  updatedSkills: [];
}

export interface ITestResult {
  responseData: IResponseData | undefined;
  status?: string;
  isFailed?: boolean;
  skills?: ISkills[];
  percentageValue?: number | undefined;
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
  isLoading: boolean;
  questionStageItem: IQuestionObject;
  handleConfirm: () => void;
  children?: React.ReactChild;
  testItem?: ITestItem;
}
