import { ObjectId } from 'mongoose';

interface ISkill {
  _id?: ObjectId;
  name: string;
  image: string;
  maxScore: number;
  group: ObjectId;
}

export default ISkill;
