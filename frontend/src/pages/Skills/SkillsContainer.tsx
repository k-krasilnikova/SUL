import { FC, useState, ChangeEvent, KeyboardEvent, ClipboardEvent, useEffect } from 'react';

import { useGetSkills, useSearchSkills } from 'api/skills';
import { checkWhitespace, formatInputValue } from 'utils/helpers/searchHelpers';
import { useDebounce } from 'hooks';

import { SkillsList } from 'types/skill';
import Skills from './Skills';

const SkillsContainer: FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [skillFounded, setSkillFounded] = useState<Array<SkillsList>>([]);

  const debouncedSearchValue = useDebounce(searchInputValue);
  const { data: skillSearch } = useSearchSkills(debouncedSearchValue);
  const { data: skills } = useGetSkills();

  useEffect(() => {
    if (debouncedSearchValue) {
      if (
        skillSearch?.filter((skillList) => {
          return skillList.skills.filter((skill) =>
            skill.name.toLowerCase().includes(searchInputValue.toLowerCase()),
          );
        })
      ) {
        setSkillFounded(skillSearch);
      }
    } else {
      setSkillFounded([]);
    }
  }, [debouncedSearchValue, searchInputValue, skillSearch]);

  const searchSkills = (event: ChangeEvent<HTMLInputElement>): void => {
    const formattedValue = formatInputValue(event.target.value);
    setSearchInputValue(formattedValue);
  };

  const checkSpace = (event: KeyboardEvent) => {
    checkWhitespace(event, searchInputValue);
  };

  const checkPastedValue = (event: ClipboardEvent) => {
    event.preventDefault();
    const inputValue = event.clipboardData.getData('Text');
    const formattedValue = inputValue.split(/\s+/).join(' ').trimStart().trimEnd();
    setSearchInputValue(formattedValue);
  };

  return (
    <Skills
      skills={skills}
      searchSkills={searchSkills}
      searchInputValue={searchInputValue}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      skillFounded={skillFounded}
    />
  );
};

export default SkillsContainer;
