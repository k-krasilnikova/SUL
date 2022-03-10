import CourseStatus from 'enums/coursesEnums';
import { ObjectId } from 'mongoose';

import { ICoursePopulated } from './Icourses';

type TCourseStatus =
  | 'pending'
  | 'approved'
  | 'started'
  | 'completed'
  | 'rejected'
  | 'testing'
  | 'successful';

interface IClientCourse {
  _id?: string;
  user: ObjectId;
  course: ObjectId;
  status: CourseStatus;
  testResult: string;
  progress: [
    {
      stage: string;
      isCompleted: boolean;
    },
  ];
  date: Date;
  applyDate?: Date;
}

interface IClientCoursePopulated extends IClientCourse {
  course: ICoursePopulated;
}

export { IClientCourse, TCourseStatus, IClientCoursePopulated };
