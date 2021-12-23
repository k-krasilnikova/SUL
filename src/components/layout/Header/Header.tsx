import React from 'react';
import { NavLink } from 'react-router-dom';

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
  myCourses,
  avatarUrl,
}) => (
  <LayoutHeader>
    <NavLink to={PATHS.home}>
      <BrandLogo>Skill Up Level</BrandLogo>
    </NavLink>
    <HeaderContent>
      <SpaceHolder />
      <MyCoursesCounter myCourses={myCourses} />
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
  </LayoutHeader>
);

export default Header;
