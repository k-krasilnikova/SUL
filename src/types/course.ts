import { COURSE_LABELS } from 'constants/statuses';
import { CourseStatus } from 'enums/course';

import { TimeProps } from './time';

export type TMaterial = {
  content: {
    _id: string;
    stage: number;
    content: Array<string>;
    isCompleted: boolean;
  }[];
  technology: Array<string>;
  _id?: string;
};

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
  materials: TMaterial[];
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

export interface IMaterial {
  _id: string;
  stage: number;
  content: IContentElement[];
}

export interface IContentElement {
  type: ContentElementType;
  material: string;
}

export enum ContentElementType {
  video = 'video',
  plain = 'plain',
  presentation = 'presentation',
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
