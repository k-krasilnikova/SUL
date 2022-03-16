import { ObjectId } from 'mongoose';

interface ICourse {
  _id?: ObjectId;
  title: string;
  technologies: ObjectId[];
  requiredSkills?: ObjectId[];
  description: string;
  materials: { stage: string; content: Array<string> }[];
  test: ObjectId;
  avatar?: string;
}

type TCourses = Array<ICourse>;

export { ICourse, TCourses };
