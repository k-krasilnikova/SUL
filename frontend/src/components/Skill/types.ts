import { SkillsList } from 'types/skill';

export interface ISkillsGroupProps {
  skills: SkillsList[];
  skillFounded: SkillsList[];
}

export interface ISkillItemProps {
  name: string;
  skillImage?: string;
}
