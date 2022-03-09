import CourseStatus from 'enums/coursesEnums';
import { ObjectId } from 'mongoose';

import { ICourse } from './Icourses';

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
  applyDate: Date;
}

interface IClentCoursePopulated extends IClientCourse {
  course: ICourse;
}

export { IClientCourse, TCourseStatus, IClentCoursePopulated };
