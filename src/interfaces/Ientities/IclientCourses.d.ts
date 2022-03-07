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
  course: ObjectId | ICourse;
  status: TCourseStatus;
  testResult: string;
  progress: [
    {
      stage: string;
      isCompleted: boolean;
    },
  ];
  applyDate: Date;
}

export { IClientCourse, TCourseStatus };
