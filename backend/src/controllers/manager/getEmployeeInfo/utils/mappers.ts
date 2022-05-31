import { IClientCoursePopulated } from 'interfaces/Ientities/IclientCourses';
import { TUserStackMember } from 'interfaces/Ientities/IStackMember';
import { IUser } from 'interfaces/Ientities/Iusers';
import { IEmployeeInfo } from 'interfaces/IResponse/IResponse';
import { mapEmployeeClientCourse, mapEmployeeStack } from 'utils/normaliser/employees';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

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

export { mapEmployeeInfo };
