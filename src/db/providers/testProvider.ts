import mongoose, { Types } from 'mongoose';

import ClientCourseModel from 'db/models/ClientCourses';
import TestModel from 'db/models/Tests';
import CourseModel from 'db/models/Course';
import NotFoundError from 'classes/errors/clientErrors/NotFoundError';
import { ITest, TestDb } from 'interfaces/entities/test';
import { IUpdateTestDto } from 'interfaces/dto/courses';

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

const getTestById = async (testId: string | Types.ObjectId): Promise<ITest> => {
  const test = await TestModel.findById(testId).select('-__v').lean();

  if (!test) {
    throw new NotFoundError('Test was not found.');
  }

  return test;
};

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

const updateTest = async (updateTestDto: IUpdateTestDto): Promise<ITest> => {
  const { testId, title, questions, timeout } = updateTestDto;

  const updated = await TestModel.findByIdAndUpdate(
    testId,
    {
      $set: {
        questions,
        timeout,
        title,
      },
    },
    { returnDocument: 'after' },
  ).lean();

  if (!updated) {
    throw new NotFoundError('Test not found.');
  }

  return updated;
};

const getCourseTest = async (courseId: string | Types.ObjectId): Promise<ITest> => {
  const { test } = await CourseModel.findById(courseId).populate('test').lean();
  if (!test) {
    throw new NotFoundError('Test not found.');
  }
  return test as unknown as ITest;
};

const addCourseTest = async (testData: ITest) => TestModel.create(testData);

export {
  getTestProvider,
  getTestById,
  getTrueAnswersProvider,
  updateTest,
  getCourseTest,
  addCourseTest,
};
