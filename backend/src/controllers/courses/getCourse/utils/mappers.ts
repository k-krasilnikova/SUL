import { ICourseWithStatus } from 'interfaces/ICourses/IQueryCourses';
import { ICourse } from 'interfaces/Ientities/Icourses';

const mapCourse = (course: ICourseWithStatus, similarCourses: ICourse[]): ICourseWithStatus => ({
  ...course,
  similarCourses,
});

export { mapCourse };
