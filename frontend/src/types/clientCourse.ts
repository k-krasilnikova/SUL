import { Course, TCourseStatus } from './course';

export interface ClientCourse {
  currentStage: number;
  progress: [
    {
      _id: string;
      stage: string;
      isCompleted: boolean;
    },
  ];
  status: TCourseStatus;
  user: string;
  _id: string;
  course: Course;
  applyDate?: string;
  testDate?: string;
}
export interface ICourseInfo {
  title: string;
  description: string;
}

export type PureClientCourse = Omit<ClientCourse, 'course'>;
