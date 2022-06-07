import { Types } from 'mongoose';

import { IUserSkill } from './userSkill';

interface ISkillGroup {
  _id?: Types.ObjectId;
  name: string;
  skills: Array<Types.ObjectId | IUserSkill>;
}

export { ISkillGroup };
