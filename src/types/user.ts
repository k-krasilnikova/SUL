import { Technologies } from './skill';
import { Notification } from './notification';
import { IClientCourse } from './clientCourse';

export interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  unit?: string;
  department?: string;
  group?: string;
  myCoursesNumber?: number;
  avatar?: string;
  birthday?: Date;
  phone?: string;
  skype?: string;
  position?: string;
  courses?: IClientCourse[];
  handleLogOut?: () => void;
  technologies?: Technologies;
  notifications?: Notification[];
}

export type TRequestedUser = Pick<User, '_id' | 'avatar' | 'firstName' | 'lastName' | 'position'>;
