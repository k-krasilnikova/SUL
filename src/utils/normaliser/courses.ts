import { ICourseWithStatus, TAvailableCourse } from 'interfaces/ICourses/IQueryCourses';

const filterOnlyAvailableCourses = (courses: ICourseWithStatus[]): ICourseWithStatus[] =>
  courses.filter((course) => !course.status);

const normalizeeAvailableCoursesInfo = (courses: ICourseWithStatus[]): TAvailableCourse[] =>
  courses.map((course) => ({ _id: course._id, title: course.title }));

export { filterOnlyAvailableCourses, normalizeeAvailableCoursesInfo };
