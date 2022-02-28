import { ObjectId } from 'mongoose';

import { ICourse } from './Icourses';
import { TCourseStatus } from './IclientCourses';

interface ISkill {
  name: string;
  image: string;
  score: number;
  group: string;
}

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
  skills: ISkill[];
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

type TUserRole = 'admin' | 'manager' | 'employee';

type TUserPosition = 'Software Engineer' | 'QA Engineer' | 'Team Manager';

export { IUser, TUserRole, TUserPosition, IPendingCourses, ISkill, INotification };