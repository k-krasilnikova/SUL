import React from 'react';

import { Skill } from 'types/skill';

import SkillInfo from './SkillInfo';

const PERCENTAGE = 100;

interface SkillProps {
  skillItem: Skill;
}

const CourseMaterialInfoContainer: React.FC<SkillProps> = ({ skillItem }) => {
  const progress = (skillItem.score / skillItem.maxScore) * PERCENTAGE;
  return (
    <SkillInfo
      technologyTitle={skillItem.name}
      stages={skillItem.maxScore}
      stagesCompleted={skillItem.score}
      progress={progress}
    />
  );
};

export default CourseMaterialInfoContainer;
