import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import PATHS from 'constants/routes';
import { User } from 'types/user';
import {
  LayoutHeader,
  HeaderDivider,
  SpaceHolder,
  BrandLogo,
  HeaderContent,
  LogOut,
} from 'components/Layout/styled';
import UserDropDown from 'components/Layout/UserDropDown';

import MyCoursesCounter from './MyCoursesCounter';

const Header: React.FC<User> = ({
  userName,
  userRole,
  userUnit,
  userDepartment,
  myCoursesNumber,
  avatarUrl,
}) => (
  <LayoutHeader container>
    <Grid item xs={3}>
      <NavLink to={PATHS.home}>
        <BrandLogo>Skill Up Level</BrandLogo>
      </NavLink>
    </Grid>
    <Grid item xs={9}>
      <HeaderContent>
        <SpaceHolder />
        <MyCoursesCounter myCoursesNumber={myCoursesNumber} />
        <HeaderDivider />
        <UserDropDown
          userName={userName}
          userRole={userRole}
          userUnit={userUnit}
          userDepartment={userDepartment}
          avatarUrl={avatarUrl}
        />
        <HeaderDivider />
        <LogOut />
      </HeaderContent>
    </Grid>
  </LayoutHeader>
);

export default Header;
