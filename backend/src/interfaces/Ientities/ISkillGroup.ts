import { Types } from 'mongoose';

import { IUserSkill } from './IUserSkill';

interface ISkillGroup {
  _id?: Types.ObjectId;
  name: string;
  skills: Array<Types.ObjectId | IUserSkill>;
}

export { ISkillGroup };
