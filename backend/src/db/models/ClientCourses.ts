import { Schema, model } from 'mongoose';

import { IClientCourses } from 'interfaces/entities/IclientCourses';

const clientCoursesSchema = new Schema<IClientCourses>({
  _id: { type: Schema.Types.ObjectId },
  coursesList: [{ type: Schema.Types.ObjectId, ref: 'Courses' }],
  status: { type: String },
});

const ClientCourseModel = model<IClientCourses>('ClientCourses', clientCoursesSchema);

export default ClientCourseModel;
