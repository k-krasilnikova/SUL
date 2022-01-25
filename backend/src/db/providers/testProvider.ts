import mongoose from 'mongoose';

import ClientCourseModel from 'db/models/ClientCourses';

const getTestProvider = async (courseId: string) => {
  const test = await ClientCourseModel.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(courseId) },
      $lookup: {
        from: 'courses',
        localField: 'course',
        foreignField: '_id',
        as: 'commonCourse',
      },
    },
    { $unwind: '$commonCourse' },
    {
      $lookup: {
        from: 'test',
        localField: 'commonCourse.test',
        foreignField: '_id',
        as: 'userTest',
      },
    },
    { $unwind: '$userTest' },
    {
      $project: {
        userTest: 1,
      },
    },
  ]);
  return test;
};

export { getTestProvider };
