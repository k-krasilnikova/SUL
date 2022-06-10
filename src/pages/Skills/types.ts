import { BaseSyntheticEvent } from 'react';

import { ISkillsListProps } from 'types/skill';

export interface ISkillsPageProps {
  handleSearchInputChange: (event: BaseSyntheticEvent) => void;
  isSkillsLoading: boolean;
  skillFounded?: ISkillsListProps[];
}

export type TSkillGroupProps = Pick<ISkillsPageProps, 'skillFounded'>;

export interface ISkillItemProps {
  name: string;
  skillImage: string;
}
