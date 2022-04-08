import React from 'react';

import Avatar from 'components/Avatar';
import { EMPLOYEE_RANK } from 'constants/employeeInfo';
import { SIZE } from 'constants/sizes';
import { IEmployeeProps } from 'types/employee';

import {
  Cell,
  ImageWrapper,
  InfoContainer,
  Position,
  Row,
  StackItem,
  UserInfo,
  UserName,
} from './styled';

const EmployeeItem: React.FC<IEmployeeProps> = ({ handleNavigate, employee }) => (
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
);

export default EmployeeItem;
