import { ClientCourse } from 'types/clientCourse';

export const countProgress = (stages: ClientCourse['progress']): number => {
  const maxProgress = stages.length;
  let currentProgress = 0;
  stages.forEach((stage) => {
    if (stage.isCompleted) {
      currentProgress += 1;
    }
  });
  const progress = Math.round((currentProgress / maxProgress) * 100);
  return progress;
};
