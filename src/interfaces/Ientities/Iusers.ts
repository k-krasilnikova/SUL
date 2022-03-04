import { ObjectId } from 'mongoose';

import { ICourse } from './Icourses';
import { TCourseStatus } from './IclientCourses';
import { IUserSkillPopulated } from './IUserSkill';

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
  firstName: string;
  lastName: string;
  technologies: {
    group: ObjectId;
    achievedSkills: ObjectId[];
    isPrimary: boolean;
  }[];
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

type TUserPopulated = IUser & {
  technologies: {
    group: string;
    achievedSkills: IUserSkillPopulated[];
    isPrimary: boolean;
  };
};

type TUserRole = 'admin' | 'manager' | 'employee';

type TUserPosition = 'Software Engineer' | 'QA Engineer' | 'Team Manager';

export { IUser, TUserPopulated, TUserRole, TUserPosition, IPendingCourses, INotification };
