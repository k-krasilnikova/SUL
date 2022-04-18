import { CourseStatus } from 'enums/courseEnums';

import { TRequestedCourse } from './course';
import { TimeProps } from './time';
import { TRequestedUser } from './user';

export interface IRequest {
  _id: string;
  status: CourseStatus;
  course: TRequestedCourse;
  user: TRequestedUser;
  elapsed: TimeProps;
}
