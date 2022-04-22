import { COURSE_LABELS } from 'constants/statuses';
import { CourseStatus } from 'enums/course';
import { TMaterialVariants } from './materials';

import { TimeProps } from './time';

export type TContentElement = {
  type: TMaterialVariants;
  material: string;
};
export interface IExercise {
  eN: number;
  title: string;
  task: string;
  code?: string;
}

export interface IMaterial {
  stage: number;
  content: TContentElement[];
  exercise?: IExercise;
}

export type CourseTechnology = { skill: string; points: number };
export type TCourseStatus = `${CourseStatus}`;

export interface ICourse {
  _id: string;
  title: string;
  description: string;
  technology: CourseTechnology[];
  requiredSkills: Array<string>;
  duration: TimeProps;
  testLink: string;
  lessons: number;
  status: CourseStatus;
  avatar?: string;
}

export type TCheckedCourse = Pick<ICourse, '_id' | 'title'>;
export type TCourseInfo = Pick<ICourse, 'title' | 'description'>;
export type TRequestedCourse = Pick<ICourse, '_id' | 'avatar' | 'title'>;
export type TCourseLabels = typeof COURSE_LABELS[keyof typeof COURSE_LABELS];

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
  materials: IMaterial[];
}

export interface ICourseInfo {
  duration?: string;
  lessons?: number;
  type?: string;
}
