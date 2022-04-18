import { CourseStatus } from 'enums/courseEnums';

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
  status: CourseStatus;
  user: string;
  _id: string;
  course: Course;
  applyDate?: string;
  testDate?: string;
}

export type PureClientCourse = Omit<ClientCourse, 'course'>;
