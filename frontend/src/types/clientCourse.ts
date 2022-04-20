import { CourseStatus } from 'enums/course';

import { ICourse } from './course';

export interface ClientCourse {
  _id: string;
  status: CourseStatus;
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

export type PureClientCourse = Omit<IClientCourse, 'course'>;
