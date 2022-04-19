import React, { FC, useState, ChangeEvent, KeyboardEvent, ClipboardEvent, useEffect } from 'react';

import { useGetSkills, useSearchSkills } from 'api/skills';
import { checkPastedText, checkWhitespace, formatInputValue } from 'utils/helpers/searchHelpers';
import { useDebounce } from 'hooks';

import { SkillsList } from 'types/skill';
import SkillsCatalog from './SkillsCatalog';

const SkillsContainer: FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [skillFounded, setSkillFounded] = useState<SkillsList[]>([]);

  const debouncedSearchValue = useDebounce(searchInputValue);
  const { data: skillSearchResponse } = useSearchSkills(debouncedSearchValue);
  const { data: skillsResponse } = useGetSkills();

  useEffect(() => {
    if (debouncedSearchValue) {
      if (
        skillSearchResponse?.filter((skillList) => {
          return skillList.skills.filter((skill) =>
            skill.name.toLowerCase().includes(searchInputValue.toLowerCase()),
          );
        })
      ) {
        setSkillFounded(skillSearchResponse);
      }
    } else {
      setSkillFounded([]);
    }
  }, [debouncedSearchValue, searchInputValue, skillSearchResponse]);

  const searchSkills = (event: ChangeEvent<HTMLInputElement>): void => {
    const formattedValue = formatInputValue(event.target.value);
    setSearchInputValue(formattedValue);
  };

  const checkSpace = (event: KeyboardEvent) => {
    checkWhitespace(event, searchInputValue);
  };

  const checkPastedValue = (event: ClipboardEvent) => {
    const formattedValue = checkPastedText(event);
    setSearchInputValue(formattedValue);
  };

  return (
    <SkillsCatalog
      skills={skillsResponse}
      searchSkills={searchSkills}
      searchInputValue={searchInputValue}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      skillFounded={skillFounded}
    />
  );
};

export default SkillsContainer;
