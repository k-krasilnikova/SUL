import React, { useState } from 'react';

import { useGetSkills } from 'api/skills';
import Skills from './Skills';

const SkillsContainer: React.FC = () => {
  const [searchSkill, setSearchSkill] = useState('');

  const { data: skills } = useGetSkills();

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

  return (
    <Skills
      skills={skills}
      searchSkillInList={searchSkillInList}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchSkill={searchSkill}
    />
  );
};

export default SkillsContainer;
