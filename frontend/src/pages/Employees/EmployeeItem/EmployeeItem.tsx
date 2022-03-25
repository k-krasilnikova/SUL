import { Divider, Grid } from '@mui/material';
import React from 'react';

import { UserAvatar } from 'components/Avatar';
import { SIZE } from 'constants/sizes';
import { IEmployee } from 'types/employee';

import { ImageWrapper, Position, UserContainer, UserName } from './styled';

interface IEmployeeItemProps {
  employee: IEmployee;
}

const EmployeeItem: React.FC<IEmployeeItemProps> = ({ employee }) => (
  <Grid item container xs={12}>
    <Grid item xs={3}>
      <ImageWrapper>
        <UserAvatar size={SIZE.small} avatar={employee.avatar} />
      </ImageWrapper>
      <UserContainer>
        <UserName>{`${employee.firstName} ${employee.lastName}`}</UserName>
        <Position>{employee.position}</Position>
      </UserContainer>
    </Grid>
    <Grid item xs={2}>
      {employee.position}
    </Grid>
    <Grid item xs={2}>
      {employee.group}
    </Grid>
    <Grid item xs={2}>
      {employee.phone}
    </Grid>
    <Grid item xs={2}>
      {employee.skype}
    </Grid>
    <Divider />
  </Grid>
);

export default EmployeeItem;
