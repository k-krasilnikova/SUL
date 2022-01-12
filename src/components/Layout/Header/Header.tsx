import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import { PATHS } from 'constants/routes';
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

import { useLogOut } from 'api/logOut';

const Header: React.FC<User> = ({
  firstName,
  lastName,
  role,
  unit,
  department,
  group,
  myCoursesNumber,
  avatar,
}) => {
  const { mutateAsync } = useLogOut();
  return (
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
            firstName={firstName}
            lastName={lastName}
            role={role}
            unit={unit}
            department={department}
            group={group}
            avatar={avatar}
          />
          <HeaderDivider />
          <LogOut onClick={() => mutateAsync({ login: 'user', password: 'user' })} />
        </HeaderContent>
      </Grid>
    </LayoutHeader>
  );
};
export default Header;
