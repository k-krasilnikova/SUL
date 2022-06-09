import { TTechToAchieve } from 'interfaces/entities/test';
import { IUserSkill } from 'interfaces/entities/userSkill';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

const convertTechnologiesToUserSkills = (techs: TTechToAchieve[]): IUserSkill[] =>
  techs.map((tech) => convertToTypeUnsafe<IUserSkill>({ score: tech.points, skill: tech.skill }));

export { convertTechnologiesToUserSkills };
