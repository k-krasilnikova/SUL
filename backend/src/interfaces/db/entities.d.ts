import { ObjectId } from 'mongoose';

import { USER_ROLES } from 'config/constants';

interface User {
  _id?: ObjectId;
  username: string;
  password: string;
  refreshToken?: string;
  role: UserRole;
  position: UserPosition;
  fullName: string;
  skills: ObjectId[];
  courses: ObjectId[];
  employees: ObjectId[];
  avatar: String;
  birthday: Date;
  skype: String;
}

type UserRole = 'admin' | 'manager' | 'employee';

type UserPosition = 'Software Engineer' | 'QA Engineer' | 'Team Manager';

export { User, UserRole, UserPosition };
