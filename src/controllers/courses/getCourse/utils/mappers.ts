import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';

const mapCourse = (course: ICourseWithStatus, similarCourses: never[]): ICourseWithStatus => ({
  ...course,
  similarCourses,
});

export { mapCourse };
