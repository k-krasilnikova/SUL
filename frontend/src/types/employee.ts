import { EmployeeInfo } from 'enums/employee';

import { IClientCourse } from './clientCourse';
import { IUser } from './user';

export interface IEmployee extends IUser {
  _id: string;
  rank: number;
  stack: { member: { name: string } }[];
}



export interface IEmployeeCourses {
  searchCourseInList: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (event: React.ClipboardEvent) => void;
  searchCourse: string;
  courses?: IClientCourse[];
}

export interface IEmployeeCoursesList {
  courses?: IClientCourse[];
  showCourseInfo?: () => void;
  hideCourseInfo?: () => void;
  isShown?: boolean;
}

export interface IEmployeeSkillsAndCourses {
  employeeInfo: string;
  toggleEmployeeInfo: (infoToOpen: EmployeeInfo) => void;
  toggleHover: (buttonHovered: string) => void;
  isSkillOpened: boolean;
  isCourseOpened: boolean;
  employeeCourses?: IClientCourse[];
  employee?: IEmployee;
}
