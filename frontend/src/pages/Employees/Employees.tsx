import { FC } from 'react';

import { NO_EMPLOYEES } from 'constants/messages';
import { AuthorizedLayout } from 'components/Layout';
import NoContent from 'components/NoContent';
import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';

import { IEmployeesProps } from './types';
import { EmployeesWrapper } from './styled';
import EmployeesList from './EmployeesList';

const Employees: FC<IEmployeesProps> = ({ employees, isLoading }) => (
  <AuthorizedLayout pageName="Employees">
    {isLoading ? (
      <Loader color="primary" type={Loaders.content} />
    ) : employees?.length ? (
      <EmployeesWrapper>
        <EmployeesList employees={employees} />
      </EmployeesWrapper>
    ) : (
      <NoContent message={NO_EMPLOYEES} />
    )}
  </AuthorizedLayout>
);

export default Employees;
