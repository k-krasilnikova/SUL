import { FC, useState, BaseSyntheticEvent } from 'react';

import { useDebounce } from 'hooks';
import { useGetSkills } from 'api/skills';
import { formatInputValue } from 'utils/helpers/searchHelpers';

import Skills from './Skills';

const SkillsContainer: FC = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchInputValue);
  const { data: skillsResponse, isLoading: isLoadingSkills } = useGetSkills(debouncedSearchValue);

  const handleSearchInputChange = ({ target }: BaseSyntheticEvent) => {
    setSearchInputValue(formatInputValue(target.value));
  };

  return (
    <Skills
      skillFounded={skillsResponse}
      handleSearchInputChange={handleSearchInputChange}
      isSkillsLoading={isLoadingSkills}
    />
  );
};

export default SkillsContainer;
