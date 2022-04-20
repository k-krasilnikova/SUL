import { IClientCourse } from 'types/clientCourse';

export const isProgressCompleted = (progress?: IClientCourse['progress']): boolean =>
  !progress ? false : progress.every((stage) => stage.isCompleted);
