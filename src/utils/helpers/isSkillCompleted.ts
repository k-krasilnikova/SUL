import { UserSkill } from 'types/skill';

const isSkillCompleted = (uskill: UserSkill): boolean => {
  return uskill.score >= uskill.skill.maxScore;
};

export default isSkillCompleted;
