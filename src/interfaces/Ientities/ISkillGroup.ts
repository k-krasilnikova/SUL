import { ObjectId } from 'mongoose';

interface ISkillGroup {
  _id?: ObjectId;
  name: string;
  skills: ObjectId[];
}

export { ISkillGroup };
