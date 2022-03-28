import { ObjectId } from 'mongoose';

import { ICourse } from './Icourses';
import { TCourseStatus } from './IclientCourses';
import { IUserSkillPopulated } from './IUserSkill';
import { ITimePeriod } from '../common/datetime';

interface INotification {
  _id: ObjectId;
  title: string;
  description: string;
  status: string;
  userId: ObjectId;
}

type TUserForPendingCourses = Pick<IUser, 'firstName' | 'lastName' | 'position' | 'avatar'>;
type TCourseForPendingCourses = Pick<ICourse, 'title' | 'avatar'>;

interface IPendingCourse {
  user: TUserForPendingCourses;
  course: TCourseForPendingCourses;
  status: TCourseStatus;
  date?: Date;
  elapsed?: ITimePeriod;
}

type TPendingCourses = IPendingCourse[];

interface IUser {
  _id: ObjectId;
  username: string;
  passwordHash: string;
  email: string;
  refreshToken?: string;
  role: TUserRole;
  position: TUserPosition;
  firstName: string;
  lastName: string;
  technologies: ITechnologyGroup[];
  courses: ObjectId[];
  group: string;
  employees: ObjectId[];
  pendingCourses: ObjectId[] | TPendingCourses;
  avatar: string;
  birthday: Date;
  skype: string;
  phone: string;
  managerId: ObjectId;
  notifications?: INotification[];
}

interface ITechnologyGroup {
  group: ObjectId;
  achievedSkills: ObjectId[];
  isPrimary: boolean;
}

interface ITechnologyGroupPopuldated {
  group: string;
  achievedSkills: IUserSkillPopulated[];
  isPrimary: boolean;
}

type TUserPopulated = IUser & {
  technologies: ITechnologyGroupPopuldated[];
};

type TUserRole = 'admin' | 'manager' | 'employee';

type TUserPosition = 'Software Engineer' | 'QA Engineer' | 'Team Manager';

export {
  IUser,
  TUserPopulated,
  TUserRole,
  TUserPosition,
  TPendingCourses,
  IPendingCourse,
  INotification,
  ITechnologyGroup,
  ITechnologyGroupPopuldated,
};
