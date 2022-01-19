import { ObjectId } from 'mongoose';

type TCourseStatus = 'pending' | 'approved' | 'started' | 'completed' | 'rejected';

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

export { IClientCourse };
