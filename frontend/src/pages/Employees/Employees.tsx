import React from 'react';

import { AuthorizedLayout } from 'components/Layout';
import NoContent from 'components/NoContent';
import Loader from 'components/Loader';
import { NO_EMPLOYEES } from 'constants/messages';
import { LOADER } from 'constants/loaderTypes';
import { IEmployeesProps } from 'types/employee';

import { EmployeesWrapper } from './styled';
import EmployeesList from './EmployeesList';

const Employees: React.FC<IEmployeesProps> = ({ employees, isLoading, handleNavigate }) => (
  <AuthorizedLayout pageName="Employees">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : employees?.length ? (
      <EmployeesWrapper>
        <EmployeesList employees={employees} handleNavigate={handleNavigate} />
      </EmployeesWrapper>
    ) : (
      <NoContent message={NO_EMPLOYEES} />
    )}
  </AuthorizedLayout>
);

export default Employees;
