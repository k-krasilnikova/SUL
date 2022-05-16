import { Types } from 'mongoose';

interface IMaterial {
  _id?: Types.ObjectId;
  content: {
    _id: string;
    stage: number;
    content: Array<string>;
    isCompleted: boolean;
  }[];
  technologies: Array<string>;
}

type TMaterials = Array<IMaterial>;

export { IMaterial, TMaterials };
