import { Params } from 'react-router';

import { TVariantProgressBar } from './progressBar';

export interface IAnswer {
  variant: string;
  aN: number;
}
export interface IQuestionObject {
  qN: number;
  question: string;
  answers: IAnswer[];
}

export interface ITestItem {
  _id: string;
  questions: IQuestionObject[];
  timeout: number;
  title?: string;
}

export interface ITestResponse {
  test: ITestItem;
}

export interface ITestResult {
  newSkills: [];
  result: {
    result: number;
    testStatus: string;
  };
  updatedSkills: [];
}

export interface IPassingTestResponse {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: null;
  upsertedCount: number;
  matchedCount: number;
}

export interface IPassingTestProps {
  stage: number;
  maxStage: number;
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitResult: () => void;
  handleNavigateBack: () => void;
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

export interface ITestButtons {
  stage: number;
  stageNext: () => void;
  stageBack: () => void;
  resultEnabled: boolean;
  questionStageItem: IQuestionObject;
  value: {
    [key: number]: number;
  };
  handleSubmitResult: () => void;
}

export interface ITestTitleAndTimer {
  testItem: ITestItem;
}

export interface ITestProgress {
  progressValue?: number;
  progressText?: string;
  progressVariant?: TVariantProgressBar;
}

export interface IResultDescription {
  responseData?: ITestResult;
  isFailed?: boolean;
  assessment?: boolean;
}
