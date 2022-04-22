import mongoose, { ObjectId } from 'mongoose';

import ClientCourseModel from 'db/models/ClientCourses';
import TestModel from 'db/models/Tests';
import CourseModel from 'db/models/Course';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { ITest, TestDb } from 'interfaces/Ientities/Itest';

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
        'test.questions.answers': 1,
        'test.questions.question': 1,
        'test.questions.qN': 1,
        'test.title': 1,
        'test.timeout': 1,
        'test._id': 1,
        _id: 0,
      },
    },
  ]);
  return test;
};

const getTestById = async (testId: string | ObjectId): Promise<ITest> =>
  TestModel.findById(testId).lean();

const getTrueAnswersProvider = async (testId: string) => {
  const trueAnswers = await TestModel.findOne(
    { _id: testId },
    {
      _id: 0,
      'questions.qN': 1,
      'questions.correctAnswer': 1,
    },
  );
  if (!trueAnswers) {
    throw new Error('test not found');
  }
  return trueAnswers;
};

const updateTestQuestionsAndTimeout = async (
  testId: string | ObjectId,
  questions: ITest['questions'],
  timeout: ITest['timeout'],
): Promise<ITest> => {
  const updated = await TestModel.findByIdAndUpdate(
    testId,
    {
      $set: {
        questions,
        timeout,
      },
    },
    { returnDocument: 'after' },
  ).lean();

  if (!updated) {
    throw new NotFoundError('Test not found.');
  }

  return updated;
};

const getCourseTest = async (courseId: string | ObjectId): Promise<ITest> => {
  const { test } = await CourseModel.findById(courseId).populate('test').lean();
  if (!test) {
    throw new NotFoundError('Test not found.');
  }
  return test as unknown as ITest;
};

const addCourseTest = async (testData: ITest, questions: ITest['questions']) =>
  TestModel.create({
    title: testData.title,
    questions,
    timeout: testData.timeout,
  });

export {
  getTestProvider,
  getTestById,
  getTrueAnswersProvider,
  updateTestQuestionsAndTimeout,
  getCourseTest,
  addCourseTest,
};
