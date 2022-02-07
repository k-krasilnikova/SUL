import React, { useState } from 'react';

import { Skill } from 'types/skill';

import UserSkills from './UserSkills';

interface SkillsProps {
  skills?: Array<Skill>;
}

const UserSkillsContainer: React.FC<SkillsProps> = ({ skills }) => {
  const [searchSkill, setSearchSkill] = useState('');
  const searchSkillInList = (value: string) => {
    const formattedValue = value.split(/\s+/).join(' ').trimStart();
    setSearchSkill(formattedValue);
  };
  const checkPastedValue = (value: string) => {
    const formattedValue = value.split(/\s+/).join(' ').trimStart().trimEnd();
    setSearchSkill(formattedValue);
  };
  const checkSpace = (event: React.KeyboardEvent) => {
    const { key } = event;
    const formattedKey = key.trim();
    if (!formattedKey && searchSkill.length === 0) {
      event.preventDefault();
    }
  };
  const userSkills = skills?.filter(
    (skill) =>
      !searchSkill.trimEnd() || skill.skillGroup.toLowerCase().includes(searchSkill.toLowerCase()),
  );
  return (
    <UserSkills
      userSkills={userSkills}
      searchSkillInList={searchSkillInList}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchSkill={searchSkill}
    />
  );
};

export default UserSkillsContainer;
