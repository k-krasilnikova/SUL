import { Schema, model } from 'mongoose';

import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

const clientCourseSchema = new Schema<IClientCourse>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Courses' },
  status: { type: String },
  testResult: { type: String },
  progress: [{ stage: { type: String }, isCompleted: { type: Boolean } }],
});

const ClientCourseModel = model<IClientCourse>(
  'clientCourses',
  clientCourseSchema,
  'clientCourses',
);

export default ClientCourseModel;
