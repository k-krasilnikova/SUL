import { ObjectId } from 'mongoose';

import { ICourse } from './Icourses';
import { TCourseStatus } from './IclientCourses';
import { IUserSkillPopulated } from './IUserSkill';
import { IStackMember } from './IStackMember';
import { TUserPosition, TUserRank, TUserRole } from '../common/users';

interface INotification {
  _id: ObjectId;
  title: string;
  description: string;
  status: string;
  userId: ObjectId;
}

type TUserForPendingCourses = Pick<IUser, 'firstName' | 'lastName' | 'position' | 'avatar'>;
type TCourseForPendingCourses = Pick<ICourse, 'title'>;

interface IPendingCourses {
  user: TUserForPendingCourses;
  course: TCourseForPendingCourses;
  status: TCourseStatus;
  date: Date;
}

interface IUser {
  _id: ObjectId;
  username: string;
  passwordHash: string;
  email: string;
  refreshToken?: string;
  role: TUserRole;
  position: TUserPosition;
  rank: TUserRank;
  firstName: string;
  lastName: string;
  stack: IStackMember[];
  technologies: ITechnologyGroup[];
  courses: ObjectId[];
  group: string;
  employees: ObjectId[];
  pendingCourses: ObjectId[] | IPendingCourses;
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

export { IUser, TUserPopulated, IPendingCourses, INotification, ITechnologyGroup };
