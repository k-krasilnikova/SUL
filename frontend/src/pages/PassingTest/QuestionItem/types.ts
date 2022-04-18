import { IQuestionObject } from 'types/test';

export interface IQuestionProps {
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: {
    [key: number]: number;
  };
  questionItem: IQuestionObject;
  stage?: number | undefined;
  maxStage?: number | undefined;
}
