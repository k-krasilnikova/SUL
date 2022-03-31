import { MIN_STAGE, NOTHING, PERCENTAGE } from 'constants/test';
import { ClientCourse } from 'types/clientCourse';

export const countProgress = (stages?: ClientCourse['progress']): number => {
  if (!stages) {
    return NOTHING;
  }
  const maxProgress = stages.length;
  let currentProgress = NOTHING;
  stages.forEach((stage) => {
    if (stage.isCompleted) {
      currentProgress += MIN_STAGE;
    }
  });
  const progress = Math.round((currentProgress / maxProgress) * PERCENTAGE);
  return progress;
};
