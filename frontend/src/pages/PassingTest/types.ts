import { Params } from 'react-router';

import { IQuestionObject, ITestItem } from 'types/test';

export interface IPassingTestProps {
  stage: number;
  maxStage: number;
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitResult: () => void;
  handleNavigateBack: () => void;
  value: {
    [key: number]: number;
  };
  resultEnabled: boolean;
  stageNext: () => void;
  stageBack: () => void;
  isLoading: boolean;
  questionStageItem: IQuestionObject;
  handleConfirm: () => void;
  params: Params<string>;
  testItem?: ITestItem;
}
