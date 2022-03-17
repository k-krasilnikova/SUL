import { ClientCourse } from 'types/clientCourse';

export const isTestEnable = (progress: ClientCourse['progress']) =>
  progress.every((stage) => stage.isCompleted);
