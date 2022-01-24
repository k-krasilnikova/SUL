import { ObjectId } from 'mongoose';

type TCourseStatus = 'pending' | 'approved' | 'started' | 'completed' | 'rejected';

interface IClientCourse {
  _id?: string;
  user: ObjectId;
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

export { IClientCourse };
