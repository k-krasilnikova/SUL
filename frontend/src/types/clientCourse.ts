import { CourseStatus } from 'enums/courseEnums';

import { ICourse } from './course';

export interface IClientCourse {
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
  course: ICourse;
  applyDate?: string;
  testDate?: string;
}

export type PureClientCourse = Omit<IClientCourse, 'course'>;
