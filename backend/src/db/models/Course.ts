import { Schema, model } from 'mongoose';

import { ICourse } from 'interfaces/entities/Icourses';
import { materialSchema } from './Materials';

const courseSchema = new Schema<ICourse>({
  _id: { type: Schema.Types.ObjectId },
  title: { type: String, required: true, unique: true },
  description: { type: String },
  technology: [{ type: String, required: true }],
  requiredSkills: [{ type: String }],
  duration: { type: Number, required: true },
  materials: [materialSchema],
  testLink: { type: String },
});

const CourseModel = model<ICourse>('Courses', courseSchema);

export default CourseModel;
