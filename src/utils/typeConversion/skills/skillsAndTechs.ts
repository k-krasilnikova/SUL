import { TTechToAchieve } from 'interfaces/Ientities/Itest';
import { IUserSkill } from 'interfaces/Ientities/IUserSkill';

import { convertToTypeUnsafe } from '../common';

const convertTechnologiesToUserSkills = (techs: TTechToAchieve[]): IUserSkill[] =>
  techs.map((tech) => convertToTypeUnsafe<IUserSkill>({ score: tech.points, skill: tech.skill }));

export { convertTechnologiesToUserSkills };
