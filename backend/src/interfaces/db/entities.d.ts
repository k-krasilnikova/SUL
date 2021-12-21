import { ObjectId } from 'mongoose';

interface IUser {
  _id?: ObjectId;
  username: string;
  passwordHash: string;
  email: string;
  refreshToken?: string;
  role: UserRole;
  position: UserPosition;
  firstName: string;
  lastName: string;
  skills: ObjectId[];
  courses: ObjectId[];
  employees: ObjectId[];
  avatar: string;
  birthday: Date;
  skype: string;
}

type UserRole = 'admin' | 'manager' | 'employee';

type UserPosition = 'Software Engineer' | 'QA Engineer' | 'Team Manager';

export { IUser, UserRole, UserPosition };
