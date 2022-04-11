import { CourseStatus } from 'enums/courseEnums';

export type TMaterial = {
  _id?: string;
  content: {
    _id: string;
    stage: number;
    content: Array<string>;
    isCompleted: boolean;
  }[];
  technology: Array<string>;
};
export type CourseTechnology = { skill: string; points: number };
export type TCourseStatus = `${CourseStatus}`;
export interface Course {
  title: string;
  description: string;
  technology: CourseTechnology[];
  requiredSkills: Array<string>;
  duration: CourseDuration;
  testLink: string;
  lessons: number;
  materials: TMaterial[];
  _id: string;
  status: TCourseStatus;
  avatar?: string;
}

export interface ICheckedCourse {
  _id: string;
  title: string;
}

export enum CoursesListType {
  COURSES = 'COURSES',
  CHECKED_COURSES = 'CHECKED_COURSES',
}

export interface CourseDuration {
  days: number;
  hours: number;
  minutes: number;
}

export interface ICourses {
  сoursesResponse: ICourse[];
}

export interface ICourseMaterialsResponse {
  _id: string;
  materials: TMaterial['content'];
}

export interface ICourseInfo {
  duration?: string;
  lessons?: number;
  type?: string;
}
