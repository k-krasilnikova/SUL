import { ObjectId } from 'mongoose';

interface IMaterial {
  _id?: string;
  courseId?: ObjectId;
  content: {
    stage: number;
    content: Array<string>;
    isCompleted: boolean;
  }[];
  technology: Array<string>;
}

type TMaterials = Array<IMaterial>;

export { IMaterial, TMaterials };
