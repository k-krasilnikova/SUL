export interface Material {
  _id?: string;
  content: Array<string>;
  technology: Array<string>;
}

export interface Course {
  title: string;
  description: string;
  technology: Array<string>;
  requiredSkills: Array<string>;
  duration: CourseDuration;
  testLink: string;
  lessons: number;
  materials: Array<Material>;
  _id: string;
  status: string;
  avatar?: string;
}

export interface CourseDuration {
  days: number;
  hours: number;
  minutes: number;
}

export interface ICourses {
  сoursesResponse: Course[];
}
