import { FC, useState, useEffect, BaseSyntheticEvent } from 'react';

import { useDebounce } from 'hooks';
import { useGetSkills, useSearchSkills } from 'api/skills';
import { formatInputValue } from 'utils/helpers/searchHelpers';
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

  const handleSearchInputChange = ({ target }: BaseSyntheticEvent) => {
    setSearchInputValue(formatInputValue(target.value));
  };

  return (
    <SkillsCatalog
      skills={skillsResponse}
      skillFounded={skillFounded}
      searchInputValue={searchInputValue}
      handleSearchInputChange={handleSearchInputChange}
    />
  );
};

export default SkillsContainer;
