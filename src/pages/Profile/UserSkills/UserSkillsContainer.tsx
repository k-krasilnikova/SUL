import React, { useEffect, useState } from 'react';

import { Skill } from 'types/skill';
import groupByProperty from 'utils/helpers/groupByProperty';

import UserSkills from './UserSkills';

interface SkillsProps {
  skills?: Array<Skill>;
}

const UserSkillsContainer: React.FC<SkillsProps> = ({ skills }) => {
  const [searchSkill, setSearchSkill] = useState('');
  const [userSkills, setUserSkills] = useState<Skill[] | undefined>();

  useEffect(() => {
    if (skills) {
      setUserSkills(skills);
    }
  }, [skills]);

  useEffect(() => {
    if (skills) {
      setUserSkills(
        skills.filter(
          (skill) =>
            skill.name.toLocaleLowerCase().includes(searchSkill.trimEnd().toLocaleLowerCase()) ||
            skill.group.toLowerCase().includes(searchSkill.toLowerCase()),
        ),
      );
    }
  }, [searchSkill, skills]);

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

  const groupSkills = (skillArr: Skill[] | undefined) => {
    if (!skillArr) {
      return undefined;
    }
    return groupByProperty(skillArr, 'group');
  };

  return (
    <UserSkills
      userSkills={groupSkills(userSkills)}
      searchSkillInList={searchSkillInList}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchSkill={searchSkill}
    />
  );
};

export default UserSkillsContainer;
