import { ISkillsListProps } from 'types/skill';

export interface ISkillGroupProps {
  skills: ISkillsListProps[];
  skillFounded: ISkillsListProps[];
}

export interface ISkillItemProps {
  name: string;
  skillImage?: string;
}
