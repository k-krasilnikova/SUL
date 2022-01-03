import { ICourse } from './Icourses';

interface IClientCourses extends ICourse {
  status: CourseStatus;
}

type TClientCourses = Array<IClientCourses>;

type TCourseStatus = 'pending' | 'approved' | 'started' | 'completed' | 'failed';

export { IClientCourses, TClientCourses };
