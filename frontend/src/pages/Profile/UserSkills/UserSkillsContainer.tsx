import React, { useEffect, useState } from 'react';

import { Technologies } from 'types/skill';

import UserSkills from './UserSkills';

interface SkillsProps {
  technologies?: Technologies;
}

const UserSkillsContainer: React.FC<SkillsProps> = ({ technologies }) => {
  const [searchSkill, setSearchSkill] = useState('');
  const [userSkills, setUserSkills] = useState<Technologies | undefined>();

  useEffect(() => {
    if (technologies) {
      technologies.sort((techGroup) => (techGroup.isPrimary ? -1 : 1));
      setUserSkills(technologies);
    }
  }, [technologies]);

  useEffect(() => {
    if (technologies) {
      setUserSkills(
        technologies
          .map((techGroup) => {
            const isGroupMathed = techGroup.group.name
              .toLowerCase()
              .includes(searchSkill.toLowerCase());
            if (isGroupMathed) {
              return techGroup;
            }

            const filteredSkills = techGroup.achievedSkills.filter(
              (uskill) =>
                uskill.skill.name
                  .toLocaleLowerCase()
                  .includes(searchSkill.trimEnd().toLocaleLowerCase()) ||
                techGroup.group.name.toLowerCase().includes(searchSkill.toLowerCase()),
            );
            return { ...techGroup, achievedSkills: filteredSkills };
          })
          .filter((techGroup) => techGroup.achievedSkills.length),
      );
    }
  }, [searchSkill, technologies]);

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
    <UserSkills
      technologies={userSkills}
      searchSkillInList={searchSkillInList}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchSkill={searchSkill}
    />
  );
};

export default UserSkillsContainer;
