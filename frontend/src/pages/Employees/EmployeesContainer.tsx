import { FC } from 'react';

import useGetEmployeesList from 'api/manager/getEmployeesList';

import Employees from './Employees';

const EmployeesContainer: FC = () => {
  const { data: employeesResponse, isLoading: isEmployeesLoading } = useGetEmployeesList();

  return <Employees employees={employeesResponse} isLoading={isEmployeesLoading} />;
};

export default EmployeesContainer;
