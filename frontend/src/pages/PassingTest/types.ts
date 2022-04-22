import { Params } from 'react-router';

import { IQuestionObject, ITestItem } from 'types/test';

export interface IPassingTestProps {
  stage: number;
  maxStage: number;
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitResult: () => void;
  handleBackButtonClick: () => void;
  value: {
    [key: number]: number;
  };
  testDuration: number;
  resultEnabled: boolean;
  stageNext: () => void;
  stageBack: () => void;
  isLoading: boolean;
  questionStageItem: IQuestionObject;
  params: Params<string>;
  testTitle?: string;
}
