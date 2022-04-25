import React from 'react';

import Avatar from 'components/Avatar';
import { IEmployeeProps } from 'types/employee';
import { EmployeeRank } from 'enums/employee';
import { Size } from 'enums/sizes';

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
          <Avatar size={Size.small} avatar={employee.avatar} />
        </ImageWrapper>
        <InfoContainer>
          <UserName>{`${employee.firstName} ${employee.lastName}`}</UserName>
          <Position>{employee.position}</Position>
        </InfoContainer>
      </UserInfo>
    </Cell>
    <Cell variant="body">
      {employee.stack.map((stackItem) => (
        <StackItem key={stackItem.member.name}>{stackItem.member.name}</StackItem>
      ))}
    </Cell>
    <Cell variant="body">{EmployeeRank[employee.rank]}</Cell>
    <Cell variant="body">{employee.group}</Cell>
    <Cell variant="body">{employee.phone}</Cell>
    <Cell variant="body">{employee.skype}</Cell>
  </Row>
);

export default EmployeeItem;
