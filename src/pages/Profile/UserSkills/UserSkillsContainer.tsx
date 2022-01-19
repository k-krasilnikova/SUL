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
    (skill) => !searchSkill || skill.title.toLowerCase().includes(searchSkill.toLowerCase()),
  );
  return <UserSkills userSkills={userSkills} setSearchSkill={setSearchSkill} />;
};

export default UserSkillsContainer;
