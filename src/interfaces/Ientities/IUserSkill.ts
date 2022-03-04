import { ObjectId } from 'mongoose';

import ISkill from './ISkill';

interface IUserSkill {
  _id?: ObjectId;
  user: ObjectId;
  skill: ObjectId;
  score: number;
}

interface IUserSkillPopulated {
  skill: ISkill;
  score: number;
}

export { IUserSkill, IUserSkillPopulated };
