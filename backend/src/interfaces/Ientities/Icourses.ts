import { ObjectId } from 'mongoose';

interface ICourse {
  _id?: ObjectId;
  title: string;
  technology: string[];
  requiredSkills?: Array<string>;
  description: string;
  duration: number;
  materials: { stage: string; content: Array<string> }[];
  lessons: number;
  test: ObjectId;
}

type TCourses = Array<ICourse>;

export { ICourse, TCourses };
