import { ObjectId } from 'mongoose';
import { IUserSkill } from './IUserSkill';

interface ISkillGroup {
  _id?: ObjectId;
  name: string;
  skills: Array<ObjectId | IUserSkill>;
}

export { ISkillGroup };
