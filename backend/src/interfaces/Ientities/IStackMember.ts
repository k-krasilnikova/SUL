import { ObjectId } from 'mongoose';

interface IStackMember {
  _id?: ObjectId;
  name: string;
  relatedCourses: ObjectId[];
}

export { IStackMember };
