import { Types } from 'mongoose';

import { UserRank } from 'enums/users';
import { MaterialContentType } from 'enums/materials';

import { ITimePeriod } from '../common/datetime';

interface ICourse {
  _id?: Types.ObjectId;
  title: string;
  technologies: { skill: Types.ObjectId; points: number }[];
  requiredSkills?: Types.ObjectId[];
  complexity: UserRank;
  description: string;
  materials: {
    stage: number;
    content: Array<IContentElement>;
    exercise?: ICourseExercise;
  }[];
  test: Types.ObjectId;
  avatar: string;
  similarCourses: ICourse[];
  lessons: number;
  duration: ITimePeriod;
}

interface ICourseExercise {
  eN: number;
  title: string;
  task: string;
  code?: string;
}

interface IContentElement {
  type: MaterialContentType;
  material: string;
}

type TCourses = Array<ICourse>;

export { ICourse, TCourses, ICourseExercise };
