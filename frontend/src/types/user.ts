import { TGroupedSkills, Technologies } from './skill';
import { INotification } from './notification';
import { IClientCourse } from './clientCourse';

export interface IUser {
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
  notifications?: INotification[];
  skills?: TGroupedSkills;
}

export type TRequestedUser = Pick<IUser, '_id' | 'avatar' | 'firstName' | 'lastName' | 'position'>;
