import { Schema, model } from 'mongoose';

import { ICourse } from 'interfaces/Ientities/Icourses';
import { MaterialContentType } from 'enums/materials';
import { validationTask, validationTitle } from 'utils/validation/courseModel';

const courseSchema = new Schema<ICourse>({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  technologies: [
    { skill: { type: Schema.Types.ObjectId, required: true }, points: { type: Number } },
  ],
  requiredSkills: [{ type: Schema.Types.ObjectId }],
  complexity: { type: Number, required: true },
  materials: [
    {
      stage: { type: Number },
      content: [
        {
          type: {
            type: String,
            required: true,
            default: MaterialContentType.plain,
          },
          material: {
            type: String,
            required: true,
          },
        },
      ],
      exercise: {
        type: {
          eN: { type: Number },
          title: { type: String, required: true, ...validationTitle },
          task: { type: String, required: true, ...validationTask },
          code: { type: String },
        },
        required: false,
      },
    },
  ],
  test: { type: Schema.Types.ObjectId, ref: 'Test' },
  avatar: { type: String, required: true },
  similarCourses: [{ type: Schema.Types.ObjectId, ref: 'Courses' }],
  lessons: { type: Number },
  duration: { days: { type: Number }, hours: { type: Number }, minutes: { type: Number } },
});

const CourseModel = model<ICourse>('Courses', courseSchema, 'courses');

export default CourseModel;
