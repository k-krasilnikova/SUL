import { BaseSyntheticEvent } from 'react';

import { ISkillsListProps } from 'types/skill';

export interface ISkillsPageProps {
  searchInputValue: string;
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  skillFounded?: ISkillsListProps[];
}

export type TSkillGroupProps = Pick<ISkillsPageProps, 'skillFounded'>;

export interface ISkillItemProps {
  name: string;
  skillImage: string;
}
