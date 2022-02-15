import { ObjectId } from 'mongoose';
import { ICourse } from './Icourses';
import { TCourseStatus } from './IclientCourses';

interface ISkills {
  skillGroup: string;
  skillList: [{ name: string; image: string; score: number; maxScore: number }];
}

type TUserForPendingCourses = Pick<IUser, 'firstName' | 'lastName' | 'position' | 'avatar'>;
type TCourseForPendingCourses = Pick<ICourse, 'title'>;

export interface IPendingCourses {
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
  skills: ISkills[];
  courses: ObjectId[];
  group: string;
  employees: ObjectId[];
  pendingCourses: ObjectId[] | IPendingCourses;
  avatar: string;
  birthday: Date;
  skype: string;
  phone: string;
  managerId: ObjectId;
}

type TUserRole = 'admin' | 'manager' | 'employee';

type TUserPosition = 'Software Engineer' | 'QA Engineer' | 'Team Manager';

export { IUser, TUserRole, TUserPosition };