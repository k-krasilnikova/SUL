import { ObjectId } from 'mongoose';

interface IPendingCourse {
  _id?: string;
  user: ObjectId;
  course: ObjectId;
  time: Date;
  status: ObjectId;
}

export { IPendingCourse };
