import { Schema, model } from 'mongoose';

import { IClientCourses } from 'interfaces/entities/IclientCourses';

const clientCoursesSchema = new Schema<IClientCourses>({
  _id: { type: Schema.Types.ObjectId },
  title: { type: String, required: true },
  description: { type: String },
  technology: { type: String },
  requiredSkills: [{ type: String }],
  duration: { type: Number },
  materials: [{ type: Schema.Types.ObjectId, ref: 'Materials' }],
  testLink: { type: String },
  status: { type: String },
});

const ClientCourseModel = model<IClientCourses>('ClientCourse', clientCoursesSchema);

export default ClientCourseModel;
