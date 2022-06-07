import { IClientCoursePopulated } from 'interfaces/entities/clientCourses';
import { ICourse } from 'interfaces/entities/courses';

const mapClientCourse = (
  clientCourse: IClientCoursePopulated,
  similarCourses: ICourse[],
): IClientCoursePopulated => ({
  ...clientCourse,
  course: { ...clientCourse.course, similarCourses },
});

export { mapClientCourse };
