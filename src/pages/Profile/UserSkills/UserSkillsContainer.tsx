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
  const userSkills = skills?.filter(
    (skill) =>
      !searchSkill.trimEnd() ||
      skill.title.toLowerCase().includes(searchSkill.trimEnd().toLowerCase()),
  );
  const checkSpace = (event: React.KeyboardEvent) => {
    let { key } = event;
    key = key.trim();
    if (!key && searchSkill.length === 0) {
      event.preventDefault();
    }
  };
  return (
    <UserSkills userSkills={userSkills} setSearchSkill={setSearchSkill} checkSpace={checkSpace} />
  );
};

export default UserSkillsContainer;
