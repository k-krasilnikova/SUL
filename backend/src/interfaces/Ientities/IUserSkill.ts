import { ObjectId } from 'mongoose';

interface IUserSkill {
  _id?: ObjectId;
  user: ObjectId;
  skill: ObjectId;
  score: number;
}

export default IUserSkill;
