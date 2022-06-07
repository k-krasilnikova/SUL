import { IClientCoursePopulated } from 'interfaces/entities/clientCourses';
import { TUserStackMember } from 'interfaces/entities/stackMember';
import { IUser } from 'interfaces/entities/users';
import { IEmployeeInfo } from 'interfaces/response/response';
import { mapEmployeeClientCourse, mapEmployeeStack } from 'utils/normalizer/employees';
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
