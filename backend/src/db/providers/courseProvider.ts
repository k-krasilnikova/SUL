import CourseModel from 'db/models/Course';

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

export { getCoursesProvider, getCourseProvider };
