import React from 'react';
import { useNavigate } from 'react-router';

import useGetEmployeesList from 'api/manager/getEmployeesList';
import { PATHS } from 'constants/routes';
import transformRoute from 'utils/helpers/paths/transformRoute';

import Employees from './Employees';

const EmployeesContainer: React.FC = () => {
  const { data: employees, isLoading } = useGetEmployeesList();
  const navigateTo = useNavigate();

  const handleNavigate = (id: string) => {
    navigateTo(transformRoute(PATHS.employeeProfile, id));
  };

  return <Employees employees={employees} isLoading={isLoading} handleNavigate={handleNavigate} />;
};

export default EmployeesContainer;
