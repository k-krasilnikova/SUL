import { TUserStackMember } from 'interfaces/Ientities/IStackMember';
import { IUser } from 'interfaces/Ientities/Iusers';
import { IEmployeeShortInfo } from 'interfaces/IResponse/IResponse';
import { mapEmployeeStack } from 'utils/normalizer/employees';
import { convertToTypeUnsafe } from 'utils/typeConversion/common';

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

export { mapEmployeesShortInfo };
