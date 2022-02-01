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
  skills: [
    {
      skillGroup: { type: String },
      skillList: [
        {
          name: { type: String, unique: true },
          image: { type: String },
          score: { type: Number },
          maxScore: { type: Number },
        },
      ],
    },
  ],
  employees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  pendingCourses: [{ type: Schema.Types.ObjectId, ref: 'clientCourses' }],
  avatar: { data: Buffer, contentType: String, required: false },
  birthday: { type: Date, required: true },
  skype: { type: String, required: true, default: 'not provided' },
  managerId: { type: Schema.Types.ObjectId, ref: 'User' },
});

const UserModel = model<IUser>('User', schema, 'users');

export default UserModel;
