export interface Content {
  stage: number;
  content: string;
  isCompleted: boolean;
}

export interface Material {
  content: Array<Content>;
  technology: string;
}

export interface Course {
  title: string;
  description: string;
  technology: Array<string>;
  requiredSkills: Array<string>;
  duration: string;
  testLink: string;
  lessons: number;
  materials: Array<Material>;
  _id: string;
}
