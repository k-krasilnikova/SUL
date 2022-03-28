import { ObjectId } from 'mongoose';

import CourseStatus from 'enums/coursesEnums';

import { COURSE_FILEDS } from 'config/constants';
import { ICourseInfo } from '../ICourses/IQueryCourses';
import { ICourse } from './Icourses';

type TCourseStatus =
  | 'pending'
  | 'approved'
  | 'started'
  | 'completed'
  | 'rejected'
  | 'testing'
  | 'successful';

export type TFileds = keyof typeof COURSE_FILEDS;

interface IClientCourse {
  _id?: ObjectId;
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
  testDate?: Date;
}

interface IClientCoursePopulated extends IClientCourse {
  course: ICourse;
}

type IClientCoursePopulatedResponse = IClientCoursePopulated & { course: ICourseInfo };

export { IClientCourse, TCourseStatus, IClientCoursePopulated };
