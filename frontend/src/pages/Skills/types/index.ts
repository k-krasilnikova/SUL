import { BaseSyntheticEvent } from 'react';

import { ISkillsListProps } from 'types/skill';

export interface ISkillsPageProps {
  skillFounded: ISkillsListProps[];
  searchInputValue: string;
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  skills?: ISkillsListProps[];
  isLoading?: boolean;
}
