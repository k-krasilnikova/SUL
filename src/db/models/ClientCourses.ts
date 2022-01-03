import { Schema, model } from 'mongoose';

import { IClientCourse } from 'interfaces/entities/IclientCourses';

const clientCourseSchema = new Schema<IClientCourse>({
  _id: { type: Schema.Types.ObjectId },
  status: { type: String },
  progress: { type: Number },
  canceled: { type: Boolean },
});

const ClientCourseModel = model<IClientCourse>('ClientCourse', clientCourseSchema);

export default ClientCourseModel;
