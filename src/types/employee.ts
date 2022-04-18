import { ClientCourse } from './clientCourse';
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

export interface IEmployeeProfile {
  employeeInfo: string;
  toggleEmployeeInfo: (infoToOpen: string) => void;
  toggleHover: (buttonHovered: string) => void;
  profileInfoOpened: boolean;
  toggleProfileInfoOpened: () => void;
  isSkillOpened: boolean;
  isCourseOpened: boolean;
  employeeCourses?: ClientCourse[];
  employee?: IEmployee;
}

export interface IEmployeeCourses {
  searchCourseInList: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (event: React.ClipboardEvent) => void;
  searchCourse: string;
  courses?: ClientCourse[];
}

export interface IEmployeeCoursesList {
  courses?: ClientCourse[];
}

export interface IEmployeeInfo {
  profileInfoOpened: boolean;
  toggleProfileInfoOpened: () => void;
  employee?: IEmployee;
}

export interface IEmployeeSkillsAndCourses {
  employeeInfo: string;
  toggleEmployeeInfo: (infoToOpen: string) => void;
  toggleHover: (buttonHovered: string) => void;
  isSkillOpened: boolean;
  isCourseOpened: boolean;
  employeeCourses?: ClientCourse[];
  employee?: IEmployee;
}
