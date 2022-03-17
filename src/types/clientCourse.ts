import { Course } from './course';

export interface ClientCourse {
  currentStage: number;
  progress: [
    {
      _id: string;
      stage: string;
      isCompleted: boolean;
    },
  ];
  status: string;
  user: string;
  _id: string;
  course: Course;
  applyDate?: string;
}

export type PureClientCourse = Omit<ClientCourse, 'course'>;
