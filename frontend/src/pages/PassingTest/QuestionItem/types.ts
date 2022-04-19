import { IQuestionObject } from 'types/test';

export interface IQuestionProps {
  handleChange: (qN: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: {
    [key: string]: number;
  };
  questionItem: IQuestionObject;
  stage?: number;
  maxStage?: number;
}
