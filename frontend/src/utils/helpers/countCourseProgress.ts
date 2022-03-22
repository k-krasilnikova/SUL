interface ProgressProps {
  stage: number;
  isCompleted: boolean;
  _id: string;
}

export const countProgress = (stages: Array<ProgressProps>): number => {
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
