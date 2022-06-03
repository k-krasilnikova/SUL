import { ICourseWithStatus } from 'interfaces/courses/query';

const mapCourse = (course: ICourseWithStatus, similarCourses: never[]): ICourseWithStatus => ({
  ...course,
  similarCourses,
});

export { mapCourse };
