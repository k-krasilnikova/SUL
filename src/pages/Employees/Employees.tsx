import React from 'react';
import { Grid } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { NoContent } from 'components/NoContent';
import Loader from 'components/Loader';
import { NO_EMPLOYEES } from 'constants/messages';
import { LOADER } from 'constants/loaderTypes';
import { SIZE } from 'constants/sizes';
import { IEmployeesProps } from 'types/employee';

import { EmployeesWrapper, HeaderCell, HeaderText } from './styled';
import EmployeeItem from './EmployeeItem';

const Employees: React.FC<IEmployeesProps> = ({ employees, isLoading }) => (
  <AuthorizedLayout pageName="Employees">
    <EmployeesWrapper>
      {isLoading ? (
        <Loader color="primary" type={LOADER.content} />
      ) : (
        <Grid container>
          <Grid item container xs={12} columnSpacing={2} wrap="nowrap">
            <HeaderCell item xs={1} xl={2} />
            <HeaderCell item xs={1}>
              <HeaderText>Stack</HeaderText>
            </HeaderCell>
            <HeaderCell item xs={1}>
              <HeaderText>Rank</HeaderText>
            </HeaderCell>
            <HeaderCell item xs={1}>
              <HeaderText>Group</HeaderText>
            </HeaderCell>
            <HeaderCell item xs={1}>
              <HeaderText>Phone</HeaderText>
            </HeaderCell>
            <HeaderCell item xs={1}>
              <HeaderText>Skype</HeaderText>
            </HeaderCell>
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
