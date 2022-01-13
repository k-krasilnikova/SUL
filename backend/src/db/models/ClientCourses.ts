import { Schema, model } from 'mongoose';

import { IClientCourse } from 'interfaces/Ientities/IclientCourses';

const clientCourseSchema = new Schema<IClientCourse>({
  course: { type: Schema.Types.ObjectId, ref: 'courses' },
  status: { type: String },
  currentStage: { type: Number },
});

const ClientCourseModel = model<IClientCourse>(
  'clientCourses',
  clientCourseSchema,
  'clientCourses',
);

export default ClientCourseModel;
