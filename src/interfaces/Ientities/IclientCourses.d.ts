import { ObjectId } from 'mongoose';

import { ICourse, ICoursePopulated } from './Icourses';

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
  status: TCourseStatus;
  testResult: string;
  progress: [
    {
      stage: string;
      isCompleted: boolean;
    },
  ];
  date: Date;
}

interface IClientCoursePopulated extends IClientCourse {
  course: ICoursePopulated;
}

export { IClientCourse, TCourseStatus, IClientCoursePopulated };
