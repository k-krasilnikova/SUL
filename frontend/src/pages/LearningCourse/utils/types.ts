import { IClientCourse } from 'types/clientCourse';

export interface IGetIsStageCompletedProps {
  nextStage: number;
  progress: IClientCourse['progress'];
}
