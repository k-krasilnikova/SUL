import { IGetIsStageCompletedProps } from './types';

const NOT_FOUNDED_INDEX = -1;

const getIsNextStageCompleted = ({ nextStage, progress }: IGetIsStageCompletedProps): boolean =>
  progress.findIndex(
    ({ stage: progressStage, isCompleted }) => Number(progressStage) === nextStage && isCompleted,
  ) !== NOT_FOUNDED_INDEX;
export default getIsNextStageCompleted;
