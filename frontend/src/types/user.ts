import { TGroupedSkills, Technologies } from './skill';
import { IClientCourse } from './clientCourse';
import { INotification } from './notifications';

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
  technologies?: Technologies;
  notifications?: INotification[];
  skills?: TGroupedSkills;
  pendingRequestsAmount?: number;
  pendingAssessmentsAmount?: number;
}

export type TUserInfo = Pick<IUser, 'avatar' | 'firstName' | 'lastName'>;
export type TRequestedUser = TUserInfo & Pick<IUser, '_id' | 'position'>;
