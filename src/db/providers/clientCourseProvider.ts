import ClientCourseModel from '../models/ClientCourses';

const getClientCoursesProvider = async (id: string) => {
  const courses = await ClientCourseModel.findById(id).lean();
  if (!courses) throw new Error('User have not courses');
  return courses;
};

export { getClientCoursesProvider };
