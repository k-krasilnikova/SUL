import mongoose from 'mongoose';

import ClientCourseModel from 'db/models/ClientCourses';
import { TestDb } from 'interfaces/Ientities/Itest';

const getTestProvider = async (courseId: string) => {
  const test: TestDb[] = await ClientCourseModel.aggregate([
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
        'test.questions.answers.isCorrect': 0,
        _id: 0,
        user: 0,
        course: 0,
        status: 0,
        testResult: 0,
        nestedCourse: 0,
      },
    },
  ]);
  return test;
};

export { getTestProvider };
