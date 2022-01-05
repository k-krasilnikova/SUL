import { Schema, model } from 'mongoose';

import { IClientCourse } from 'interfaces/entities/IclientCourses';

const clientCourseSchema = new Schema<IClientCourse>({
  _id: { type: Schema.Types.ObjectId },
  course: { type: Schema.Types.ObjectId, ref: 'Courses' },
  status: { type: String },
  currentStage: { type: Number },
});

const ClientCourseModel = model<IClientCourse>('ClientCourse', clientCourseSchema);

export default ClientCourseModel;
