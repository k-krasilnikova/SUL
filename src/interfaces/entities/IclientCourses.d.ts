import { ObjectId } from 'mongoose';

interface IClientCourses {
  _id?: string;
  coursesList: ObjectId;
  status: CourseStatus;
}

type TClientCourses = Array<IClientCourses>;

type TCourseStatus = 'pending' | 'approved' | 'started' | 'completed' | 'failed';

export { IClientCourses, TClientCourses };
