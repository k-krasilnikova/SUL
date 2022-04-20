import { ObjectId } from 'mongoose';

import { UserRank } from 'enums/users';

interface ICourse {
  _id?: ObjectId;
  title: string;
  technologies: { skill: ObjectId; points: number }[];
  requiredSkills?: ObjectId[];
  complexity: UserRank;
  description: string;
  materials: {
    stage: number;
    content: Array<string>;
    exercise?: {
      eN: number;
      title: string;
      task: string;
      code: string;
    };
  }[];
  test: ObjectId;
  avatar: string;
}

type TCourses = Array<ICourse>;

export { ICourse, TCourses };
