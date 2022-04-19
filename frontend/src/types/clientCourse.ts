import { ICourse } from './course';

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
  course: ICourse;
  applyDate?: string;
  testDate?: string;
}
export interface ICourseInfo {
  title: string;
  description: string;
}

export type PureClientCourse = Omit<ClientCourse, 'course'>;
