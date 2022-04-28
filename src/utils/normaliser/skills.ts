import { IUserSkill } from 'interfaces/Ientities/IUserSkill';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

const extractCommonUserSkillInfo = (skills: IUserSkill[]): IUserSkill[] =>
  skills.map((uSkill) =>
    convertToTypeUnsafe<IUserSkill>({
      score: uSkill.score,
      skill: uSkill.skill,
    }),
  );

export { extractCommonUserSkillInfo };
