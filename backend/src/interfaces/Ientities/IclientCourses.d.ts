import { ObjectId } from 'mongoose';

interface IClientCourse {
  _id?: string;
  course: ObjectId;
  status: TCourseStatus;
  currentStage: number;
  progress: [
    {
      stage: string;
      isCompleted: boolean;
    },
  ];
}
type TCourseStatus = 'pending' | 'approved' | 'started' | 'completed' | 'failed';

export { IClientCourse };
