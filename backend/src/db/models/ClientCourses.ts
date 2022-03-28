import { Schema, model } from 'mongoose';

import { IClientCourse } from 'interfaces/Ientities/IclientCourses';
import { DESTRUCTION_TIMEOUT } from 'config/constants';

const clientCourseSchema = new Schema<IClientCourse>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Courses' },
  status: { type: String },
  testResult: { type: String },
  progress: [{ stage: { type: String }, isCompleted: { type: Boolean } }],
  date: { type: Date },
  applyDate: { type: Date, expires: DESTRUCTION_TIMEOUT },
  testDate: { type: Date },
});

const ClientCourseModel = model<IClientCourse>(
  'clientCourses',
  clientCourseSchema,
  'clientCourses',
);

export default ClientCourseModel;
