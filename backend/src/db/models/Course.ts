import { Schema, model } from 'mongoose';

import { ICourse } from 'interfaces/entities/Icourses';

const courseSchema = new Schema<ICourse>({
  _id: { type: Schema.Types.ObjectId },
  title: { type: String, required: true, unique: true },
  description: { type: String },
  technology: { type: String, required: true },
  requiredSkills: [{ type: String }],
  duration: { type: Number, required: true },
  materials: { type: Schema.Types.ObjectId, ref: 'Materials' },
  testLink: { type: String },
});

const CourseModel = model<ICourse>('Courses', courseSchema);

export default CourseModel;
