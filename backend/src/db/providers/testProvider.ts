import mongoose from 'mongoose';

import ClientCourseModel from 'db/models/ClientCourses';

const getTestProvider = async (courseId: string) => {
  const test = await ClientCourseModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(courseId) } },
    {
      $lookup: {
        from: 'courses',
        localField: 'course',
        foreignField: '_id',
        as: 'nested_course',
      },
    },
    {
      $lookup: {
        from: 'tests',
        localField: 'nested_course.test',
        foreignField: '_id',
        as: 'myTest',
      },
    },
    { $project: { myTest: 1, _id: 0 } },
  ]);
  return test;
};

export { getTestProvider };
