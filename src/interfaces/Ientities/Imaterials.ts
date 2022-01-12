import { ObjectId } from 'mongoose';

interface IMaterial {
  _id?: ObjectId;
  content: {
    _id: string;
    stage: number;
    content: Array<string>;
    isCompleted: boolean;
  }[];
  technology: Array<string>;
}

type TMaterials = Array<IMaterial>;

export { IMaterial, TMaterials };
