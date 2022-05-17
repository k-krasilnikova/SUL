import { Types } from 'mongoose';

import CourseStatus from 'enums/coursesEnums';
import { ICourseInfo } from 'interfaces/ICourses/IQueryCourses';
import { CLIENT_COURSE_FIELDS, COURSE_FIELDS } from 'config/constants';

import { ICourse } from './Icourses';

export type TCourseFields = typeof COURSE_FIELDS[`${keyof typeof COURSE_FIELDS}`];
export type TClientCourseFields =
  typeof CLIENT_COURSE_FIELDS[`${keyof typeof CLIENT_COURSE_FILEDS}`];

interface IClientCourse {
  _id?: Types.ObjectId;
  user: Types.ObjectId;
  course: Types.ObjectId;
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
  startTestDate?: Date;
  finishTestDate?: Date;
}

interface IClientCoursePopulated extends IClientCourse {
  course: ICourse;
}

type IClientCoursePopulatedResponse = IClientCoursePopulated & { course: ICourseInfo };

export { IClientCourse, IClientCoursePopulated };
