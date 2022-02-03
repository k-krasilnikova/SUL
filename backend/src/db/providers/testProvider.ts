import mongoose from 'mongoose';

import ClientCourseModel from 'db/models/ClientCourses';
import { TestDb } from 'interfaces/Ientities/Itest';
import TestModel from 'db/models/Tests';

const getTestProvider = async (courseId: string) => {
  const test: Promise<TestDb>[] = await ClientCourseModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(courseId) } },
    {
      $lookup: {
        from: 'courses',
        localField: 'course',
        foreignField: '_id',
        as: 'nestedCourse',
      },
    },
    {
      $lookup: {
        from: 'tests',
        localField: 'nestedCourse.test',
        foreignField: '_id',
        as: 'test',
      },
    },
    { $unwind: { path: '$test', preserveNullAndEmptyArrays: true } },
    {
      $project: {
        'test.questions.answers.variant': 1,
        'test.questions.question': 1,
        'test.title': 1,
        'test.timeout': 1,
        'test._id': 1,
        _id: 0,
      },
    },
  ]);
  return test;
};

const getTrueAnswersProvider = async (testId: string) => {
  const trueAnswers = await TestModel.findOne(
    { _id: testId },
    {
      _id: 0,
      'questions.qN': 1,
      'questions.question': 0,
      trueAnswers: {
        $filter: {
          input: '$questions.answers',
          as: 'quArray',
          cond: { $eq: ['$$quArray.isCorrect', true] },
        },
      },
    },
  );
  if (!trueAnswers) {
    throw new Error('test not found');
  }
  return trueAnswers;
};

export { getTestProvider, getTrueAnswersProvider };
