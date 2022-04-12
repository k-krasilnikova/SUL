import { ObjectId } from 'mongoose';

import CourseStatus from 'enums/coursesEnums';
import { ICourseInfo } from 'interfaces/ICourses/IQueryCourses';
import { CLIENT_COURSE_FIELDS } from 'config/constants';

import { ICourse } from './Icourses';

type TCourseStatus =
  | 'pending'
  | 'approved'
  | 'started'
  | 'completed'
  | 'rejected'
  | 'testing'
  | 'assessment'
  | 'successful';

export type TFileds = keyof typeof CLIENT_COURSE_FIELDS;

interface IClientCourse {
  _id?: ObjectId;
  user: ObjectId;
  course: ObjectId;
  status: CourseStatus;
  withAssessment: boolean;
  testResult: { qN: number; aN: boolean }[];
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
