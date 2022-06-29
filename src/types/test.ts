import { Params } from 'react-router';

import { TVariantProgressBar } from './progressBar';
import { IUserSkill } from './skill';

export interface IAnswer {
  variant: string;
  aN: number;
}
export interface IQuestionObject {
  qN: number;
  question: string;
  answers: IAnswer[];
  correctAnswer: number;
}

export interface ITestItem {
  _id: string;
  questions: IQuestionObject[];
  timeout: number | string;
  title?: string;
}

export interface ITestResponse {
  test: ITestItem;
}

export interface ITestResult {
  newSkills: IUserSkill[];
  result: {
    result: number;
    testStatus: string;
  };
  updatedSkills: IUserSkill[];
  techsToAchieve: IUserSkill[];
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
  value: {
    [key: number]: number;
  };
  testDuration: number;
  params: Readonly<Params<string>>;
  questionStageItem: IQuestionObject;
  resultEnabled: boolean;
  isLoading: boolean;
  stageNext: () => void;
  stageBack: () => void;
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitResult: () => void;
  handleBackButtonClick: () => void;
  children?: React.ReactChild;
  testTitle?: string;
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
  duration: number;
  title?: string;
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
