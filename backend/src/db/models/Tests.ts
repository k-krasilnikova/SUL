import { Schema, model } from 'mongoose';

import { ITest } from 'interfaces/entities/test';

const testSchema = new Schema<ITest>({
  title: { type: String, required: true },
  questions: [
    {
      qN: { type: Number, unique: true },
      question: { type: String },
      answers: [
        {
          aN: { type: Number, unique: true },
          variant: { type: String },
        },
      ],
      correctAnswer: { type: Number },
    },
  ],
  timeout: { type: Number, required: true },
  attempts: { type: Number },
});

const TestModel = model<ITest>('Test', testSchema, 'tests');

export default TestModel;
