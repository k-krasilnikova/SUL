import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import { IStackMember } from 'interfaces/Ientities/IStackMember';
import { IUser } from 'interfaces/Ientities/Iusers';
import {
  IEmployeeClientCourse,
  IEmployeeInfo,
  TEmployeeCourse,
} from 'interfaces/IResponse/IResponse';

const mapEmployeeClientCourse = (clientCourse: IClientCoursePopulated): IEmployeeClientCourse => {
  const { status, progress, date } = clientCourse;
  const { title, avatar } = clientCourse.course;
  const course: TEmployeeCourse = { title, avatar };
  const emplooyeeClientCourse: IEmployeeClientCourse = { status, progress, date, course };
  return emplooyeeClientCourse;
};

const mapEmployeeStack = (stack: IStackMember[]): Pick<IStackMember, 'name'>[] =>
  stack.map((member) => ({ name: member.name }));

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
  courses: courses.map(mapEmployeeClientCourse),
  stack: mapEmployeeStack(employee.stack),
});

export { mapEmployeeInfo };
