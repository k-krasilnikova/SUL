import { ICourseStatus, TAvailableCourse } from 'interfaces/ICourses/IQueryCourses';

const filterOnlyAvailableCourses = (courses: ICourseStatus[]): ICourseStatus[] =>
  courses.filter((course) => !course.status);

const normalizeeAvailableCoursesInfo = (courses: ICourseStatus[]): TAvailableCourse[] =>
  courses.map((course) => ({ _id: course._id, title: course.title }));

export { filterOnlyAvailableCourses, normalizeeAvailableCoursesInfo };
