import { ObjectId } from 'mongoose';

import { UserRank } from 'enums/users';

import { ICourse } from './Icourses';
import { IClientCourse } from './IclientCourses';
import { IUserSkillPopulated } from './IUserSkill';
import { IUserStackMemberDatabase } from './IStackMember';
import { ITimePeriod } from '../common/datetime';
import { TUserPosition, TUserRole } from '../common/users';

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
  status: IClientCourse['status'];
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
  rank: UserRank;
  firstName: string;
  lastName: string;
  stack: IUserStackMemberDatabase[];
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

export { IUser, TUserPopulated, IPendingCourse, TPendingCourses, INotification, ITechnologyGroup };
