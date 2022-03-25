import React from 'react';

import useGetEmployeesList from 'api/manager/getEmployeesList';

import Employees from './Employees';

const EmployeesContainer: React.FC = () => {
  const { data: employees, isLoading } = useGetEmployeesList();

  return <Employees employees={employees} isLoading={isLoading} />;
};

export default EmployeesContainer;
