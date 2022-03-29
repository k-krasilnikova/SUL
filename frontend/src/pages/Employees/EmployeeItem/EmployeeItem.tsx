import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';
import { PATHS } from 'constants/routes';
import { IEmployeeItemProps } from 'types/employee';

import {
  Cell,
  EmployeeContainer,
  ImageWrapper,
  InfoContainer,
  Position,
  StyledDivider,
  Text,
  UserName,
} from './styled';

const EmployeeItem: React.FC<IEmployeeItemProps> = ({ employee }) => (
  <>
    <Link to={`${PATHS.employees}/${employee._id}`}>
      <Grid item container xs={12} columnSpacing={2} wrap="nowrap">
        <EmployeeContainer item xs={1} xl={2}>
          <ImageWrapper>
            <UserAvatar size={SIZE.small} avatar={employee.avatar} />
          </ImageWrapper>
          <InfoContainer>
            <UserName>{`${employee.firstName} ${employee.lastName}`}</UserName>
            <Position>{employee.position}</Position>
          </InfoContainer>
        </EmployeeContainer>
        <Cell item xs={1}>
          <Text>{employee.position}</Text>
        </Cell>
        <Cell item xs={1}>
          <Text>Rank</Text>
        </Cell>
        <Cell item xs={1}>
          <Text>{employee.group}</Text>
        </Cell>
        <Cell item xs={1}>
          <Text>{employee.phone}</Text>
        </Cell>
        <Cell item xs={1}>
          <Text>{employee.skype}</Text>
        </Cell>
      </Grid>
      <StyledDivider />
    </Link>
  </>
);

export default EmployeeItem;
