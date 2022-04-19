import { Params } from 'react-router';

import { ConvertedProgress } from 'utils/helpers/convertCourseStatusToProgress';

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

export interface IPassingTestResponse {
  acknowledged: boolean;
  modifiedCount: number;
  upsertedId: null;
  upsertedCount: number;
  matchedCount: number;
}

export interface ITestResult {
  responseData: IResponseData | undefined;
  status?: string;
  isFailed?: boolean;
  skills?: ISkills[];
  percentageValue?: number;
  courseId?: string;
  assessment?: boolean;
  isLoading: boolean;
  progressBarData: ConvertedProgress;
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
  progressVariant?: string;
}

export interface IResultDescription {
  responseData?: IResponseData;
  isFailed?: boolean;
  assessment?: boolean;
}
