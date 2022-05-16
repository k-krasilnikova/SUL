import { FC } from 'react';

import { NO_EMPLOYEES } from 'constants/messages';
import PageTitle from 'components/PageTitle';
import NoContent from 'components/NoContent';
import Loader from 'components/Loader';
import { Loaders } from 'enums/loader';

import { IEmployeesProps } from './types';
import { EmployeesWrapper } from './styled';
import EmployeesList from './EmployeesList';

const Employees: FC<IEmployeesProps> = ({ employees, isLoading }) => (
  <PageTitle title="Employees">
    {isLoading ? (
      <Loader type={Loaders.content} />
    ) : employees?.length ? (
      <EmployeesWrapper>
        <EmployeesList employees={employees} />
      </EmployeesWrapper>
    ) : (
      <NoContent message={NO_EMPLOYEES} />
    )}
  </PageTitle>
);

export default Employees;
