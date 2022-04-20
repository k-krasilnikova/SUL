import { EmployeeInfo } from 'enums/employee';
import { IClientCourse } from 'types/clientCourse';
import { IEmployee } from 'types/employee';

export interface IEmployeeProfile {
  employeeInfo: EmployeeInfo;
  toggleEmployeeInfo: (infoToOpen: EmployeeInfo) => void;
  toggleHover: (buttonHovered: string) => void;
  profileInfoOpened: boolean;
  toggleProfileInfoOpened: () => void;
  isSkillOpened: boolean;
  isCourseOpened: boolean;
  employeeCourses?: IClientCourse[];
  employee?: IEmployee;
}
