import { ObjectId } from 'mongoose';

interface ICourse {
  _id?: string;
  title: string;
  technology: string;
  requiredSkills?: Array<string>;
  description: string;
  duration: number;
  materials: ObjectId;
  testLink: string;
}

type TCourses = Array<ICourse>;

export { ICourse, TCourses };
