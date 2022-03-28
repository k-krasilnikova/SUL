import { ClientCourse } from 'types/clientCourse';

export const isProgressCompleted = (progress?: ClientCourse['progress']) =>
  !progress ? false : progress.every((stage) => stage.isCompleted);
