import React, { useState } from 'react';

import { UserSkill } from 'types/skill';

import SkillInfo from './SkillInfo';

const PERCENTAGE = 100;

interface SkillProps {
  skillItem: UserSkill;
}

const CourseMaterialInfoContainer: React.FC<SkillProps> = ({ skillItem }) => {
  const progress = (skillItem.score / skillItem.skill.maxScore) * PERCENTAGE;
  const [isShown, setIsShown] = useState(false);

  const showSkillInfo = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setIsShown(true);
  };

  const hideSkillInfo = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setIsShown(false);
  };

  return (
    <SkillInfo
      isShown={isShown}
      showSkillInfo={showSkillInfo}
      hideSkillInfo={hideSkillInfo}
      technologyTitle={skillItem.skill.name}
      imageUrl={skillItem.skill.image}
      stages={skillItem.skill.maxScore}
      stagesCompleted={skillItem.score}
      progress={progress}
    />
  );
};

export default CourseMaterialInfoContainer;
