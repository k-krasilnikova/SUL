import { CourseStatus } from 'enums/courseEnums';
import { TimeProps } from './time';

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
  _id: string;
  title: string;
  description: string;
  technology: CourseTechnology[];
  requiredSkills: Array<string>;
  duration: TimeProps;
  testLink: string;
  lessons: number;
  materials: TMaterial[];
  status: CourseStatus;
  avatar?: string;
}

export type TCheckedCourse = Pick<Course, '_id' | 'title'>;
export type TCourseInfo = Pick<Course, 'title' | 'description'>;
export type TRequestedCourse = Pick<Course, '_id' | 'avatar' | 'title'>;
export enum CoursesListType {
  COURSES = 'COURSES',
  CHECKED_COURSES = 'CHECKED_COURSES',
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
