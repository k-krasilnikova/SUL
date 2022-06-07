import { IUserSkill } from 'types/skill';

export interface ISkillInfoProps {
  skillScore: IUserSkill['score'];
  skill: IUserSkill['skill'];
}

export interface ISkillInfoWrapperProps {
  completed?: boolean;
}
