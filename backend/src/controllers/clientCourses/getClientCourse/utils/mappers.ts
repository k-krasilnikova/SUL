import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';

const mapClientCourse = (
  clientCourse: IClientCoursePopulated,
  similarCourses: never[],
): IClientCoursePopulated => ({
  ...clientCourse,
  course: { ...clientCourse.course, similarCourses },
});

export { mapClientCourse };
