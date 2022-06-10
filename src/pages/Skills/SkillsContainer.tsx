import { FC, useState, useEffect, BaseSyntheticEvent } from 'react';

import { useDebounce } from 'hooks';
import { useGetSkills } from 'api/skills';
import { formatInputValue } from 'utils/helpers/searchHelpers';
import { ISkillsListProps } from 'types/skill';

import Skills from './Skills';

const SkillsContainer: FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [skillFounded, setSkillFounded] = useState<ISkillsListProps[] | undefined>([]);

  const debouncedSearchValue = useDebounce(searchInputValue);
  const { data: skillsResponse, isLoading: isLoadingSkills } = useGetSkills(debouncedSearchValue);

  useEffect(() => {
    setSkillFounded((prevSkills) => {
      if (isLoadingSkills) {
        return prevSkills;
      }
      return skillsResponse;
    });
  }, [isLoadingSkills, skillsResponse]);

  const handleSearchInputChange = ({ target }: BaseSyntheticEvent) => {
    setSearchInputValue(formatInputValue(target.value));
  };

  return (
    <Skills
      skillFounded={skillFounded}
      searchInputValue={searchInputValue}
      handleSearchInputChange={handleSearchInputChange}
    />
  );
};

export default SkillsContainer;
