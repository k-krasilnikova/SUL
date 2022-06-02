import { ICourseWithStatus } from 'interfaces/courses/queryCourses';

const mapCourse = (course: ICourseWithStatus, similarCourses: never[]): ICourseWithStatus => ({
  ...course,
  similarCourses,
});

export { mapCourse };
