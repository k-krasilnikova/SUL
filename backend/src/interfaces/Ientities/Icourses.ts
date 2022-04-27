import { ObjectId } from 'mongoose';

import { UserRank } from 'enums/users';
import { MaterialContentType } from 'enums/materials';

import { ITimePeriod } from '../common/datetime';

interface ICourse {
  _id?: ObjectId;
  title: string;
  technologies: { skill: ObjectId; points: number }[];
  requiredSkills?: ObjectId[];
  complexity: UserRank;
  description: string;
  materials: { stage: number; content: Array<IContentElement> }[];
  test: ObjectId;
  avatar: string;
  similarCourses: ICourse[];
  lessons: number;
  duration: ITimePeriod;
}

interface IContentElement {
  type: MaterialContentType;
  material: string;
}

type TCourses = Array<ICourse>;

export { ICourse, TCourses };
