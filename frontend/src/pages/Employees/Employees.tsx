import React from 'react';
import { Box, Grid } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { NoContent } from 'components/NoContent';
import Loader from 'components/Loader';
import { NO_EMPLOYEES } from 'constants/messages';
import { LOADER } from 'constants/loaderTypes';
import { IEmployeesProps } from 'types/employee';

import { EmployeesWrapper, HeaderCell, HeaderText } from './styled';
import EmployeeItem from './EmployeeItem';

const Employees: React.FC<IEmployeesProps> = ({ employees, isLoading }) => (
  <AuthorizedLayout pageName="Employees">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : employees?.length ? (
      <EmployeesWrapper>
        <Grid item container xs={12} wrap="nowrap" columnSpacing={{ xs: 4, md: 2, xl: 1 }}>
          <HeaderCell item xs={3} md={2} xl={1}>
            <Box sx={{ width: '200px' }} />
          </HeaderCell>
          <HeaderCell item xs={1}>
            <Box sx={{ width: '200px' }}>
              <HeaderText>Stack</HeaderText>
            </Box>
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
        {employees.map((employee) => (
          <EmployeeItem employee={employee} />
        ))}
      </EmployeesWrapper>
    ) : (
      <NoContent message={NO_EMPLOYEES} />
    )}
  </AuthorizedLayout>
);

export default Employees;
