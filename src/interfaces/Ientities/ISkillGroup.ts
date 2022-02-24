import { ObjectId } from 'mongoose';

interface ISkillGroup {
  _id?: ObjectId;
  skills: ObjectId[];
}

export { ISkillGroup };
