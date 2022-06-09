import { IProgress } from 'interfaces/courses/query';

const generateProgressDto = (numberOfStages: number): IProgress[] => {
  const progress = [];

  for (let i = 1; i <= numberOfStages; i += 1) {
    progress.push({
      stage: i,
      isCompleted: false,
    });
  }

  return progress;
};

export { generateProgressDto };
