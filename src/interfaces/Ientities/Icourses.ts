import { ObjectId } from 'mongoose';

import ISkill from './ISkill';

interface ICourse {
  _id?: ObjectId;
  title: string;
  technologies: ObjectId[];
  requiredSkills?: ObjectId[];
  description: string;
  duration: number;
  materials: { stage: string; content: Array<string> }[];
  lessons: number;
  test: ObjectId;
  avatar?: string;
}

type ICoursePopulated = Omit<ICourse, 'technologies'> & { technologies: ISkill[] };

type TCourses = Array<ICourse>;

export { ICourse, TCourses, ICoursePopulated };