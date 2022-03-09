import { Schema, model } from 'mongoose';

import { ICourse } from 'interfaces/Ientities/Icourses';

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  technologies: [{ type: Schema.Types.ObjectId, required: true }],
  requiredSkills: [{ type: Schema.Types.ObjectId }],
  duration: { type: Number, required: true },
  materials: [{ stage: { type: Number }, content: [{ type: String }] }],
  lessons: { type: Number },
  test: { type: Schema.Types.ObjectId, ref: 'Test' },
});

const CourseModel = model<ICourse>('Courses', courseSchema, 'courses');

export default CourseModel;
