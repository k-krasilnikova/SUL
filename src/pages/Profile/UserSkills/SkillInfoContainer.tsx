import React from 'react';

import SkillInfo from './SkillInfo';

interface SkillProps {
  skillItem: {
    id: number;
    technology: Array<string>;
    stages: Array<{
      stage: number;
      isCompleted: boolean;
    }>;
  };
}

const PERCENTAGE = 100;

const CourseMaterialInfoContainer: React.FC<SkillProps> = ({ skillItem }) => {
  const technologyTitle = skillItem.technology.join(', ');
  const stages = skillItem.stages.length;
  let stagesCompleted = 0;
  skillItem.stages.forEach((stage) => {
    if (stage.isCompleted) {
      stagesCompleted += 1;
    }
  });
  const progress = (stagesCompleted / stages) * PERCENTAGE;
  return (
    <SkillInfo
      technologyTitle={technologyTitle}
      stages={stages}
      stagesCompleted={stagesCompleted}
      progress={progress}
    />
  );
};

export default CourseMaterialInfoContainer;
