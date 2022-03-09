import React from 'react';

import { UserSkill } from 'types/skill';

import SkillInfo from './SkillInfo';

const PERCENTAGE = 100;

interface SkillProps {
  skillItem: UserSkill;
}

const CourseMaterialInfoContainer: React.FC<SkillProps> = ({ skillItem }) => {
  const progress = (skillItem.score / skillItem.skill.maxScore) * PERCENTAGE;
  return (
    <SkillInfo
      technologyTitle={skillItem.skill.name}
      stages={skillItem.skill.maxScore}
      stagesCompleted={skillItem.score}
      progress={progress}
    />
  );
};

export default CourseMaterialInfoContainer;
