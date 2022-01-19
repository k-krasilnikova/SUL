import ClientCourseModel from '../models/ClientCourses';

const getClientCoursesProvider = async () => {
  try {
    return await ClientCourseModel.find().populate('course');
  } catch (e) {
    throw new Error();
  }
};

export { getClientCoursesProvider };
