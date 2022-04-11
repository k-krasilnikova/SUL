<<<<<<< HEAD
import { ICourse } from './course';
=======
import { Course, TCourseStatus } from './course';
>>>>>>> 05350fa4 (refactor: change course's types)

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
  course: ICourse;
  applyDate?: string;
  testDate?: string;
}
export interface ICourseInfo {
  title: string;
  description: string;
}

export type PureClientCourse = Omit<ClientCourse, 'course'>;
