import { Schema, model } from 'mongoose';

import { ICourse } from 'interfaces/entities/Icourses';

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  technology: [{ type: String, required: true }],
  requiredSkills: [{ type: String }],
  duration: { type: Number, required: true },
  materials: [{ type: Schema.Types.ObjectId, ref: 'materials' }],
  lessons: { type: Number },
  testLink: { type: String },
});

const CourseModel = model<ICourse>('courses', courseSchema);

export default CourseModel;
