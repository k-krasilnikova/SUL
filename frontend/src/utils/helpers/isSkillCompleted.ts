import { IUserSkill } from 'types/skill';

const isSkillCompleted = (uskill: IUserSkill): boolean => {
  return uskill.score >= uskill.skill.maxScore;
};

export default isSkillCompleted;
