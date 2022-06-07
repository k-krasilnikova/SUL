import { Schema, model } from 'mongoose';

import { IClientCourse } from 'interfaces/entities/clientCourses';
import { DESTRUCTION_TIMEOUT } from 'config/constants';

const clientCourseSchema = new Schema<IClientCourse>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Courses' },
  status: { type: String },
  withAssessment: { type: Boolean, default: false },
  testResult: [{ qN: { type: Number }, aN: { type: Boolean } }],
  progress: [{ stage: { type: String }, isCompleted: { type: Boolean } }],
  date: { type: Date },
  applyDate: { type: Date, expires: DESTRUCTION_TIMEOUT },
  startTestDate: { type: Date },
  finishTestDate: { type: Date },
});

const ClientCourseModel = model<IClientCourse>(
  'clientCourses',
  clientCourseSchema,
  'clientCourses',
);

export default ClientCourseModel;
