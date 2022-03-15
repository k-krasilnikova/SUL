import { IUserSkill } from 'interfaces/Ientities/IUserSkill';

const extractCommonUserSkillInfo = (skills: IUserSkill[]) =>
  skills.map((uSkill) => {
    return { score: uSkill.score, skill: uSkill.skill };
  });

export { extractCommonUserSkillInfo };
