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

export interface ICheckedCourse {
  _id: string;
  title: string;
}

export enum CoursesListType {
  COURSES = 'COURSER',
  CHECKED_COURSES = 'CHECKED_COURSES',
}

export interface CourseDuration {
  days: number;
  hours: number;
  minutes: number;
}

export interface ICourses {
  сoursesResponse: Course[];
}

export interface IMaterial {
  _id: string;
  stage: number;
  content: Array<string>;
}
export interface ICourseMaterialsResponse {
  _id: string;
  materials: IMaterial[];
}
