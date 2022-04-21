import { EmployeeRank } from 'enums/employee';

export interface ICoursesProps {
  courses: ICourseShortInfo[];
}

export interface IStackMapProps {
  coursesMapResponce?: ICoursesMapResponse;
}

export interface ICourseMapForCurrentStackProps {
  courseMapForCurrentStack: ICoursesMapElement[];
  isPrimaryStack: boolean;
  userRank?: number;
}

export interface ISkillsMapProps {
  isCoursesMapResponceLoading: boolean;
  coursesMapResponce?: ICoursesMapResponse;
}

export interface ICoursesMapResponse {
  userRank: EmployeeRank;
  stackMap: IStackMapElement[];
}

interface IStackMapElement {
  coursesMap: ICoursesMapElement[];
  stack: string;
  isPrimary: boolean;
}

interface ICoursesMapElement {
  courses: ICourseShortInfo[];
  rank: EmployeeRank;
}

interface ICourseShortInfo {
  _id: string;
  avatar: string;
  title: string;
  isCompleted: boolean;
}
