import { ObjectId } from 'mongoose';

interface IClientCourses {
  _id?: ObjectId;
  title: string;
  technology: string;
  requiredSkills?: Array<string>;
  status: CourseStatus;
  description: string;
  duration: number;
  materials: Array<string>;
  testLink: string;
}

type TClientCourses = Array<IClientCourses>;

type TCourseStatus = 'pending' | 'approved' | 'started' | 'completed' | 'failed';

export { IClientCourses, TClientCourses };
