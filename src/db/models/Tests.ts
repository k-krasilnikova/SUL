import { Schema, model } from 'mongoose';

import { ITest } from 'interfaces/Ientities/Itest';

const testSchema = new Schema<ITest>({
  title: { type: String, required: true, unique: true },
  questions: [
    {
      qN: { type: Number, unique: true },
      question: { type: String },
      answers: [
        {
          aN: { type: Number, unique: true },
          variant: { type: String },
          isCorrect: { type: Boolean },
        },
      ],
    },
  ],
  timeout: { type: Number, required: true },
});

const TestModel = model<ITest>('Test', testSchema, 'tests');

export default TestModel;
