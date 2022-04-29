import { CourseStatus } from 'enums/course';

import { ICourse, TRequestedCourse } from './course';
import { TimeProps } from './time';
import { IUser, TRequestedUser } from './user';

export interface IRequest {
  _id: string;
  status: CourseStatus;
  course: TRequestedCourse;
  user: TRequestedUser;
  elapsed: TimeProps;
}

export interface IAssessment {
  user: Pick<IUser, 'firstName' | 'lastName' | 'position' | 'avatar'>;
  course: Pick<ICourse, 'title' | 'technologies' | 'avatar'>;
}
