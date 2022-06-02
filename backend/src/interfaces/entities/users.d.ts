import { Types } from 'mongoose';

import { UserRank } from 'enums/users';

import { ICourse } from './courses';
import { IClientCourse } from './clientCourses';
import { IUserSkillPopulated } from './userSkill';
import { IUserStackMemberDatabase } from './stackMember';
import { ITimePeriod } from '../common/datetime';
import { TUserPosition, TUserRole } from '../common/users';

interface INotification {
  _id: Types.ObjectId;
  title: string;
  courseName: string;
  userName: string;
  description: string;
  status: string;
  userId: Types.ObjectId;
  type: string;
}

type TUserForPendingCourses = Pick<IUser, 'firstName' | 'lastName' | 'position' | 'avatar'>;
type TCourseForPendingCourses = Pick<ICourse, 'title' | 'avatar'>;

interface IPendingCourse {
  user: TUserForPendingCourses;
  course: TCourseForPendingCourses;
  status: IClientCourse['status'];
  date?: Date;
  elapsed?: ITimePeriod;
}

type TPendingCourses = IPendingCourse[];

interface IUser {
  _id: Types.ObjectId;
  username: string;
  passwordHash: string;
  email: string;
  refreshToken?: string;
  role: TUserRole;
  position: TUserPosition;
  rank: UserRank;
  firstName: string;
  lastName: string;
  stack: IUserStackMemberDatabase[];
  technologies: ITechnologyGroup[];
  courses: Types.ObjectId[];
  group: string;
  employees: Types.ObjectId[];
  pendingCourses: Types.ObjectId[] | TPendingCourses;
  avatar: string;
  birthday: Date;
  skype: string;
  phone: string;
  managerId: Types.ObjectId;
  notifications?: INotification[];
  accessToken?: string;
}

interface ITechnologyGroup {
  group: Types.ObjectId;
  achievedSkills: Types.ObjectId[];
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

export { IUser, TUserPopulated, IPendingCourse, TPendingCourses, INotification, ITechnologyGroup };
