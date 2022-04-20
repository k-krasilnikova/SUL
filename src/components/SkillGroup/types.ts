import { ISkillsListProps } from 'types/skill';

export interface ISkillsGroupProps {
  skills: ISkillsListProps[];
  skillFounded: ISkillsListProps[];
}

export interface ISkillItemProps {
  name: string;
  skillImage?: string;
}
