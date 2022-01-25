import { Schema, model } from 'mongoose';

import { ITest } from 'interfaces/Ientities/Itest';

const testSchema = new Schema<ITest>({
  title: { type: String, required: true, unique: true },
  questions: [
    {
      question: { type: String },
      answers: [{ variant: { type: String }, isCorrect: { type: Boolean } }],
    },
  ],
  timeout: { type: Number, required: true },
});

const CourseModel = model<ITest>('Test', testSchema, 'tests');

export default CourseModel;
