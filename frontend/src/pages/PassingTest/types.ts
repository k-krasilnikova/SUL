import { IQuestionObject } from 'types/test';

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
  testTitle?: string;
}
