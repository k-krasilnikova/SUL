import { BaseSyntheticEvent } from 'react';

import { ISkills, SkillsList } from 'types/skill';

export interface ISkillsPageProps extends ISkills {
  skillFounded: SkillsList[];
  searchInputValue: string;
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  isLoading?: boolean;
}
