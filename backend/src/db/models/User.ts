import { Schema, model } from 'mongoose';

import { IUser } from 'interfaces/Ientities/Iusers';

const schema = new Schema<IUser>({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  email: { type: String, required: true },
  refreshToken: { type: String, required: true },
  role: { type: String, required: true, default: 'employee' },
  position: { type: String, required: true, default: 'Software Engineer' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  skills: [{ type: Schema.Types.ObjectId, ref: 'UserSkill' }],
  courses: [{ type: Schema.Types.ObjectId, ref: 'UserCourse' }],
  employees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  avatar: { data: Buffer, contentType: String, required: false },
  birthday: { type: Date, required: true },
  skype: { type: String, required: true, default: 'not provided' },
});

const UserModel = model<IUser>('User', schema, 'users');

export default UserModel;
