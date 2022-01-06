import { Schema, model } from 'mongoose';

import { ICourse } from 'interfaces/entities/Icourses';
// import { materialSchema } from './Materials';

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  technology: [{ type: String, required: true }],
  requiredSkills: [{ type: String }],
  duration: { type: Number, required: true },
  testLink: { type: String },
});

const CourseModel = model<ICourse>('courses', courseSchema);

export default CourseModel;
