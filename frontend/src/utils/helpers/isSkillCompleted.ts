import { Skill } from 'types/skill';

const isSkillCompleted = (skill: Skill): boolean => {
  return skill.score >= skill.maxScore;
};

export default isSkillCompleted;
