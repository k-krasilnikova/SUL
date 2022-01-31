import { ObjectId } from 'mongoose';

interface IUser {
  _id?: ObjectId;
  username: string;
  passwordHash: string;
  email: string;
  refreshToken?: string;
  role: TUserRole;
  position: TUserPosition;
  firstName: string;
  lastName: string;
  skills: ObjectId[];
  courses: ObjectId[];
  group: string;
  employees: ObjectId[];
  pendingCourses: ObjectId[];
  avatar: string;
  birthday: Date;
  skype: string;
  phone: string;
  managerId: ObjectId;
}

type TUserRole = 'admin' | 'manager' | 'employee';

type TUserPosition = 'Software Engineer' | 'QA Engineer' | 'Team Manager';

export { IUser, TUserRole, TUserPosition };
