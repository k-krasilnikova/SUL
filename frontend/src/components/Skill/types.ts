import { SkillsList } from 'types/skill';

export interface ISkillProps {
  skills: SkillsList[];
  skillFounded: SkillsList[];
}

export interface ISkillItemProps {
  name: string;
  skillImage?: string;
}
