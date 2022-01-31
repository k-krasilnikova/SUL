import React, { useState } from 'react';

import UserSkills from './UserSkills';

interface SkillsProps {
  skills: Array<{
    id: number;
    title: string;
    isCompleted: boolean;
    technologies: Array<{
      id: number;
      technology: Array<string>;
      stages: Array<{
        stage: number;
        isCompleted: boolean;
      }>;
    }>;
  }>;
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
      !searchSkill.trimEnd() || skill.title.toLowerCase().includes(searchSkill.toLowerCase()),
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
