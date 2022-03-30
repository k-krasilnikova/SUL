import { ObjectId } from 'mongoose';

import { UserRank } from 'enums/users';

interface ICourse {
  _id?: ObjectId;
  title: string;
  technologies: ObjectId[];
  requiredSkills?: ObjectId[];
  complexity: UserRank;
  description: string;
  materials: { stage: string; content: Array<string> }[];
  test: ObjectId;
  avatar?: string;
}

type TCourses = Array<ICourse>;

export { ICourse, TCourses };
