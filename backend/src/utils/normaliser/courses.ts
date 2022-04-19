import CourseStatus from 'enums/coursesEnums';
import { ICourseStatus } from 'interfaces/ICourses/IQueryCourses';
import { ICourseShortInfo } from 'interfaces/IResponse/IResponse';

const shortifyCourseInfo = (course: ICourseStatus): ICourseShortInfo => ({
  _id: course._id,
  title: course.title,
  avatar: course.avatar,
  isCompleted: course.status === CourseStatus.completed,
});

const shortifyCourses = (courses: ICourseStatus[]): ICourseShortInfo[] =>
  courses.map(shortifyCourseInfo);

export { shortifyCourseInfo, shortifyCourses };
