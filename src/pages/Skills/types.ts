import { BaseSyntheticEvent } from 'react';

import { ISkillsProps, ISkillsListProps } from 'types/skill';

export interface ISkillsPageProps extends ISkillsProps {
  skillFounded: ISkillsListProps[];
  searchInputValue: string;
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  isLoading?: boolean;
}
