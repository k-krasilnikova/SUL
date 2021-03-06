import { ICourseWithStatus, TAvailableCourse } from 'interfaces/courses/query';

const filterOnlyAvailableCourses = (courses: ICourseWithStatus[]): ICourseWithStatus[] =>
  courses.filter((course) => !course.status);

const mapAvailableCoursesInfo = (courses: ICourseWithStatus[]): TAvailableCourse[] =>
  courses.map((course) => ({ _id: course._id, title: course.title }));

export { filterOnlyAvailableCourses, mapAvailableCoursesInfo };
