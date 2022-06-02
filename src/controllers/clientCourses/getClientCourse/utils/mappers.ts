import { IClientCoursePopulated } from 'interfaces/entities/clientCourses';

const mapClientCourse = (
  clientCourse: IClientCoursePopulated,
  similarCourses: never[],
): IClientCoursePopulated => ({
  ...clientCourse,
  course: { ...clientCourse.course, similarCourses },
});

export { mapClientCourse };
