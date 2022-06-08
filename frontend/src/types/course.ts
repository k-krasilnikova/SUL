import { COURSE_LABELS } from 'constants/statuses';
import { CourseStatus } from 'enums/course';
import { EmployeeRank } from 'enums/employee';

import { TMaterialVariants } from './materials';
import { ITechnology } from './skill';
import { TimeProps } from './time';

export interface ICoursesFilterValues {
  technologies: string[];
  status: string[];
  complexity: string[];
  order: boolean;
}

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

export type TCourseTechnology = { skill: string; points: number };
export type TCourseStatus = `${CourseStatus}`;

export interface ICourse {
  complexity: number;
  description: string;
  duration: TimeProps;
  lessons: number;
  requiredSkills: { image: string; maxScore: number; name: string }[];
  similarCourses: ICourse[];
  technologies: ITechnology[];
  test: string;
  title: string;
  _id: string;
  status: CourseStatus;
  avatar?: string;
  materials?: IMaterial[];
}

export interface IShortCourseInfo {
  _id: string;
  title: string;
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

export interface ICoursesMapResponse {
  userRank: EmployeeRank;
  stackMap: IStackMapElement[];
}

export interface IStackMapElement {
  coursesMap: ICoursesMapElement[];
  stack: string;
  isPrimary: boolean;
}

export interface ICoursesMapElement {
  courses: ICourseShortInfo[];
  rank: EmployeeRank;
}

export interface ICourseShortInfo {
  _id: string;
  avatar: string;
  title: string;
  isCompleted: boolean;
  clientCourseId?: string;
}
