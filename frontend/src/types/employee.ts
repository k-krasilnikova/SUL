import { ClientCourse } from './clientCourse';
import { Technologies } from './skill';

export interface IEmployee {
  _id: string;
  firstName: string;
  lastName: string;
  position: string;
  group: string;
  rank: number;
  stack: { name: string }[];
  avatar: string;
  skype: string;
  phone: string;
  technologies?: Technologies;
  courses?: ClientCourse[];
}

export interface IEmployees {
  employeesResponse: IEmployee[];
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
