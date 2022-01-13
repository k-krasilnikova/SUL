import ClientCourseModel from '../models/ClientCourses';

const getClientCoursesProvider = async () => {
  try {
    const courses = await ClientCourseModel.find().lean();
    return courses;
  } catch (e) {
    throw new Error();
  }
};

export { getClientCoursesProvider };
