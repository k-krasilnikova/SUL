import { Schema, model } from 'mongoose';

import { ICourse } from 'interfaces/Ientities/Icourses';

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  technology: [{ type: String, required: true }],
  requiredSkills: [{ type: String }],
  duration: { type: Number, required: true },
  materials: [{ stage: { type: Number }, content: [{ type: String }] }],
  lessons: { type: Number },
  testLink: { type: String },
});

const CourseModel = model<ICourse>('Courses', courseSchema, 'courses');

export default CourseModel;
