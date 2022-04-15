import { ICourse } from './course';

export interface ClientCourse {
  _id: string;
  status: string;
  currentStage: number;
  progress: [
    {
      _id: string;
      stage: string;
      isCompleted: boolean;
    },
  ];
  user: string;
  course: ICourse;
  finishTestDate: string;
  applyDate?: string;
  testDate?: string;
}
export interface ICourseInfo {
  title: string;
  description: string;
}

export type PureClientCourse = Omit<ClientCourse, 'course'>;
