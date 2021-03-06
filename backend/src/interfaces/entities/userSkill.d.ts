import { Types } from 'mongoose';

import ISkill from './skill';

interface IUserSkill {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  skill: Types.ObjectId;
  score: number;
}

interface ISkillTech {
  skill: Types.ObjectId;
  points: number;
}

interface IUserSkillPopulated {
  skill: ISkill;
  score: number;
}

export { IUserSkill, IUserSkillPopulated, ISkillTech };
