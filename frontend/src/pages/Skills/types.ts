import { BaseSyntheticEvent } from 'react';

import { ISkillsListProps } from 'types/skill';

export interface ISkillsPageProps {
  skills?: ISkillsListProps[];
  skillFounded: ISkillsListProps[];
  searchInputValue: string;
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  isLoading?: boolean;
}
