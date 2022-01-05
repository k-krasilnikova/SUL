import { TMaterials } from './Imaterials';

interface ICourse {
  _id?: string;
  title: string;
  technology: string;
  requiredSkills?: Array<string>;
  description: string;
  duration: number;
  materials: TMaterials;
  testLink: string;
}

type TCourses = Array<ICourse>;

export { ICourse, TCourses };
