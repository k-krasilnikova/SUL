import { EmployeeInfo } from 'enums/employee';
import { IClientCourse } from 'types/clientCourse';
import { IEmployee } from 'types/employee';

export interface IEmployeeProfileProps {
  employeeInfo: EmployeeInfo;
  toggleEmployeeInfo: (infoToOpen: EmployeeInfo) => void;
  toggleHover: (buttonHovered: string) => void;
  isSkillOpened: boolean;
  isCourseOpened: boolean;
  employeeCourses?: IClientCourse[];
  employee?: IEmployee;
}
