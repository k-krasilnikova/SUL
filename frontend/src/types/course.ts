export interface Course {
  _id?: string;
  title: string;
  description: string;
  technology: Array<string>;
  requiredSkills: Array<string>;
  duration: string;
  testLink: string;
  lessons: number;
  materials: Array<string>;
}
