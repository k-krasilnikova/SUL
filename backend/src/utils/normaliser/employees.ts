import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import { TUserStackMember, TUserStackMemberShort } from 'interfaces/Ientities/IStackMember';
import { IUser } from 'interfaces/Ientities/Iusers';
import {
  IEmployeeClientCourse,
  IEmployeeInfo,
  IEmployeeShortInfo,
  TEmployeeCourse,
} from 'interfaces/IResponse/IResponse';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

const mapEmployeeClientCourse = (clientCourse: IClientCoursePopulated): IEmployeeClientCourse => {
  const { status, progress, date } = clientCourse;
  const { title, avatar } = clientCourse.course;
  const course: TEmployeeCourse = { title, avatar };
  const emplooyeeClientCourse: IEmployeeClientCourse = { status, progress, date, course };
  return emplooyeeClientCourse;
};

const mapEmployeeStack = (stack: TUserStackMember[]): TUserStackMemberShort[] =>
  stack.map((stackMember) => ({
    isPrimary: stackMember.isPrimary,
    member: { name: stackMember.member.name },
  }));

const mapEmployeeInfo = (employee: IUser, courses: IClientCoursePopulated[]): IEmployeeInfo => ({
  _id: employee._id,
  firstName: employee.firstName,
  lastName: employee.lastName,
  position: employee.position,
  technologies: employee.technologies,
  group: employee.group,
  avatar: employee.avatar,
  birthday: employee.birthday,
  skype: employee.skype,
  phone: employee.phone,
  rank: employee.rank,
  courses: courses.map(mapEmployeeClientCourse),
  stack: mapEmployeeStack(convertToTypeUnsafe<TUserStackMember[]>(employee.stack)),
});

const mapEmployeeShortInfo = (employee: IUser): IEmployeeShortInfo => ({
  _id: employee._id,
  firstName: employee.firstName,
  lastName: employee.lastName,
  position: employee.position,
  group: employee.group,
  avatar: employee.avatar,
  skype: employee.skype,
  phone: employee.phone,
  rank: employee.rank,
  stack: mapEmployeeStack(convertToTypeUnsafe<TUserStackMember[]>(employee.stack)),
});

const mapEmployeesShortInfo = (employees: IUser[]): IEmployeeShortInfo[] =>
  employees.map((employee) => mapEmployeeShortInfo(employee));

export { mapEmployeeInfo, mapEmployeesShortInfo };
