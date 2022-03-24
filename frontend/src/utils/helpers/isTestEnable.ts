import { ClientCourse } from 'types/clientCourse';

export const isTestEnable = (progress?: ClientCourse['progress']) =>
  !progress ? false : progress.every((stage) => stage.isCompleted);
