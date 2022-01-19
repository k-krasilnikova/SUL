import { ObjectId } from 'mongoose';

interface IClientCourse {
  _id?: string;
  user: ObjectId;
  course: ObjectId;
  status: TCourseStatus;
  currentStage: number;
}

type TCourseStatus = 'pending' | 'approved' | 'started' | 'completed' | 'failed';

export { IClientCourse };
