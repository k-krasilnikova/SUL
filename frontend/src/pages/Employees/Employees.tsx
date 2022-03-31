import React from 'react';
import { TableBody, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';

import { AuthorizedLayout } from 'components/Layout';
import { NoContent } from 'components/NoContent';
import Loader from 'components/Loader';
import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';
import { NO_EMPLOYEES } from 'constants/messages';
import { LOADER } from 'constants/loaderTypes';
import { PATHS } from 'constants/routes';
import { EMPLOYEE_RANK, HEADER_COLUMNS } from 'constants/employeeInfo';
import { IEmployeesProps } from 'types/employee';

import {
  Cell,
  EmployeesTable,
  EmployeesWrapper,
  HeaderRow,
  StackItem,
  UserInfo,
  ImageWrapper,
  InfoContainer,
  Position,
  UserName,
} from './styled';

const Employees: React.FC<IEmployeesProps> = ({ employees, isLoading }) => (
  <AuthorizedLayout pageName="Employees">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : employees?.length ? (
      <EmployeesWrapper>
        <EmployeesTable stickyHeader>
          <TableHead>
            <HeaderRow>
              {HEADER_COLUMNS.map((columnName) => (
                <Cell variant="head">{columnName}</Cell>
              ))}
            </HeaderRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow
                key={employee._id}
                component={Link}
                to={`${PATHS.employees}/${employee._id}`}
              >
                <Cell variant="body">
                  <UserInfo>
                    <ImageWrapper>
                      <UserAvatar size={SIZE.small} avatar={employee.avatar} />
                    </ImageWrapper>
                    <InfoContainer>
                      <UserName>{`${employee.firstName} ${employee.lastName}`}</UserName>
                      <Position>{employee.position}</Position>
                    </InfoContainer>
                  </UserInfo>
                </Cell>
                <Cell variant="body">
                  {employee.stack.map((stackItem) => (
                    <StackItem key={stackItem.name}>{stackItem.name}</StackItem>
                  ))}
                </Cell>
                <Cell variant="body">{EMPLOYEE_RANK[employee.rank]}</Cell>
                <Cell variant="body">{employee.group}</Cell>
                <Cell variant="body">{employee.phone}</Cell>
                <Cell variant="body">{employee.skype}</Cell>
              </TableRow>
            ))}
          </TableBody>
        </EmployeesTable>
      </EmployeesWrapper>
    ) : (
      <NoContent message={NO_EMPLOYEES} />
    )}
  </AuthorizedLayout>
);

export default Employees;
