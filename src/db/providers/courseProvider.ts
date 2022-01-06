import CourseModel from 'db/models/Course';
import { MaterialModel } from 'db/models/Materials';

const getCoursesProvider = async () => {
  const courses = await CourseModel.find().lean();
  if (!courses) {
    throw new Error('courses not found');
  }
  return courses;
};

const getCourseProvider = async (courseId: string) => {
  const course = await CourseModel.findById(courseId).lean();
  if (!course) {
    throw new Error('course not found');
  }
  return course;
};

const getMaterialsProvider = async () => {
  const materials = await MaterialModel.find().lean();
  console.log('in provider', materials);
  if (!materials) {
    throw new Error('materialss not found');
  }
  return materials;
};

export { getCoursesProvider, getCourseProvider, getMaterialsProvider };
