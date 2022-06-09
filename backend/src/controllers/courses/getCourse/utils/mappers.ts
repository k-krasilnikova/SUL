import { ICourseWithStatus } from 'interfaces/courses/query';
import { ICourse } from 'interfaces/entities/courses';

const mapCourse = (course: ICourseWithStatus, similarCourses: ICourse[]): ICourseWithStatus => ({
  ...course,
  similarCourses,
});

export { mapCourse };
