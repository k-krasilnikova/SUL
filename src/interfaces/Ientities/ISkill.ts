import { Types } from 'mongoose';

interface ISkill {
  _id?: Types.ObjectId;
  name: string;
  image: string;
  maxScore: number;
  group: Types.ObjectId;
}

export default ISkill;
