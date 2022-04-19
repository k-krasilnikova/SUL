import { EmployeeInfo } from 'enums/employee';

import { IClientCourse } from './clientCourse';
import { User } from './user';

export interface IEmployee extends User {
  _id: string;
  rank: number;
  stack: { name: string }[];
}

export interface IEmployeesProps {
  handleNavigate: (_id: string) => void;
  employees?: IEmployee[];
  isLoading?: boolean;
}

export interface IEmployeeProps {
  handleNavigate: (_id: string) => void;
  employee: IEmployee;
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
}

export interface IEmployeeInfo {
  profileInfoOpened: boolean;
  toggleProfileInfoOpened: () => void;
  employee?: IEmployee;
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
