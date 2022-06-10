import { ISkillsListProps } from 'types/skill';

export interface ISkillGroupProps {
  skillFounded?: ISkillsListProps[];
}

export interface ISkillItemContainerProps {
  name: string;
  skillImage?: string;
}

export interface ISkillItemProps {
  name: string;
  skillImage?: string;
  isSkillNameShown?: boolean;
  showSkillName?: () => void;
  hideSkillName?: () => void;
}
