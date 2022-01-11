import ClientCourseModel from '../models/ClientCourses';

const getClientCoursesProvider = async (id: string) => {
  const courses = await ClientCourseModel.findById(id).lean();
  if (!courses) {
    return [];
  }
  return courses;
};

export { getClientCoursesProvider };
