import { Schema, model } from 'mongoose';

import { ICourse } from 'interfaces/Ientities/Icourses';

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  technologies: [
    { skill: { type: Schema.Types.ObjectId, required: true }, points: { type: Number } },
  ],
  requiredSkills: [{ type: Schema.Types.ObjectId }],
  complexity: { type: Number, required: true },
  materials: [{ stage: { type: Number }, content: [{ type: String }] }],
  test: { type: Schema.Types.ObjectId, ref: 'Test' },
  avatar: { type: String, required: true },
});

const CourseModel = model<ICourse>('Courses', courseSchema, 'courses');

export default CourseModel;
