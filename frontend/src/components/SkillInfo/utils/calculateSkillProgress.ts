const PERCENTAGE = 100;

export const calculateSkillProgress = (stagesCompleted: number, maxStages: number): number =>
  (stagesCompleted / maxStages) * PERCENTAGE;
