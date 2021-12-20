import { Schema, model } from 'mongoose';

import { User } from 'interfaces/db/entities';

const schema = new Schema<User>({
  _id: { type: Schema.Types.ObjectId, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  refreshToken: { type: String, required: true },
  role: { type: String, required: true, default: 'employee' },
  position: { type: String, required: true, default: 'Software Engineer' },
  fullName: { type: String, required: true },
  skills: [{ type: Schema.Types.ObjectId, ref: 'UserSkill' }],
  courses: [{ type: Schema.Types.ObjectId, ref: 'UserCourse' }],
  employees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  avatar: { data: Buffer, contentType: String, required: false },
  birthday: { type: Date, required: true },
  skype: { type: String, required: true, default: 'not provided' },
});

const UserModel = model<User>('User', schema);

export default UserModel;
