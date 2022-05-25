import { ICourseWithStatus, TAvailableCourse } from 'interfaces/ICourses/IQueryCourses';

const filterOnlyAvailableCourses = (courses: ICourseWithStatus[]): ICourseWithStatus[] =>
  courses.filter((course) => !course.status);

const normalizeAvailableCoursesInfo = (courses: ICourseWithStatus[]): TAvailableCourse[] =>
  courses.map((course) => ({ _id: course._id, title: course.title }));

export { filterOnlyAvailableCourses, normalizeAvailableCoursesInfo };
