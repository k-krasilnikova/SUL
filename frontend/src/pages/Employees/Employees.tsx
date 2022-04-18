import React from 'react';
import { TableBody, TableHead } from '@mui/material';

import { AuthorizedLayout } from 'components/Layout';
import { NoContent } from 'components/NoContent';
import Loader from 'components/Loader';
import Avatar from 'components/Avatar';
import { SIZE } from 'constants/sizes';
import { NO_EMPLOYEES } from 'constants/messages';
import { LOADER } from 'constants/loaderTypes';
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
  Row,
} from './styled';

const Employees: React.FC<IEmployeesProps> = ({ employees, isLoading, handleNavigate }) => (
  <AuthorizedLayout pageName="Employees">
    {isLoading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : employees?.length ? (
      <EmployeesWrapper>
        <EmployeesTable stickyHeader>
          <TableHead>
            <HeaderRow>
              {HEADER_COLUMNS.map((columnName: string) => (
                <Cell key={columnName} variant="head">
                  {columnName}
                </Cell>
              ))}
            </HeaderRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <Row key={employee._id} onClick={() => handleNavigate(employee._id)}>
                <Cell variant="body">
                  <UserInfo>
                    <ImageWrapper>
                      <Avatar size={SIZE.small} avatar={employee.avatar} />
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
              </Row>
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
