import React from 'react';
import { Grid } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { NoContent } from 'components/NoContent';
import Loader from 'components/Loader';
import { NO_EMPLOYEES } from 'constants/messages';
import { LOADER } from 'constants/loaderTypes';
import { SIZE } from 'constants/sizes';
import { IEmployeesProps } from 'types/employee';

import { EmployeesWrapper } from './styled';
import EmployeeItem from './EmployeeItem';

const Employees: React.FC<IEmployeesProps> = ({ employees, isLoading }) => (
  <AuthorizedLayout pageName="Employees">
    <EmployeesWrapper>
      {isLoading ? (
        <Loader color="primary" type={LOADER.content} />
      ) : (
        <Grid container>
          <Grid item container xs={12}>
            <Grid item xs={3} />
            <Grid item xs={2}>
              <p>Position</p>
            </Grid>
            <Grid item xs={2}>
              <p>Group</p>
            </Grid>
            <Grid item xs={2}>
              <p>Phone</p>
            </Grid>
            <Grid item xs={2}>
              <p>Skype</p>
            </Grid>
          </Grid>
          {employees?.length ? (
            employees.map((employee) => <EmployeeItem employee={employee} />)
          ) : (
            <NoContent message={NO_EMPLOYEES} size={SIZE.medium} />
          )}
        </Grid>
      )}
    </EmployeesWrapper>
  </AuthorizedLayout>
);

export default Employees;
