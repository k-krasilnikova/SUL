export interface Course {
  title: string;
  description: string;
  technology: Array<string>;
  requiredSkills: Array<string>;
  duration: string;
  testLink: string;
  lessons: number;
  _id?: string;
  materials?: Array<string>;
}
export interface CourseResponse {
  config: {
    [key: string]: unknown | string | number;
  };
  data?: Array<Course>;
  headers: {
    [key: string]: string;
  };
  request: {
    [key: string]: unknown | string | number;
  };
  status: number;
  statusText: string;
}
