import { ICourseWithStatus } from 'interfaces/courses/query';
import { ICourse } from 'interfaces/Ientities/Icourses';

const mapCourse = (course: ICourseWithStatus, similarCourses: ICourse[]): ICourseWithStatus => ({
  ...course,
  similarCourses,
});

export { mapCourse };
