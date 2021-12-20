import React from 'react';
import { NavLink } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';

import PATHS from '../../constants/routes';
import {
  LayoutHeader, 
  HeaderDivider, 
  SpaceHolder,
  BrandLogo, 
  HeaderContent, 
  MyCoursesCounter, 
  MyCoursesCounterContent, 
  MyCoursesCounterNumber, 
  LogOut
} from './styled'
import UserDropDownContainer from './UserDropDownContainer'

interface Props {
  user?: {
    role?: string,
    unit?: string,
    department?: string,
    group?: string
  };
  myCourses?: number;
  avatarUrl?: string;
  userName?: string;
}

const HeaderAuthorized: React.FC<Props> = ({ user, myCourses, avatarUrl, userName }) => (
  <LayoutHeader>
    <NavLink to={PATHS.home}>
      <BrandLogo>
        Skill Up Level
      </BrandLogo>
    </NavLink>
    <HeaderContent>
      <SpaceHolder/>
      <MyCoursesCounter>
        <MyCoursesCounterContent>
          <VerifiedIcon fontSize='medium' color='secondary'/>
          <MyCoursesCounterNumber>
            {myCourses}
          </MyCoursesCounterNumber>
        </MyCoursesCounterContent>
      </MyCoursesCounter>
      <HeaderDivider />
        <UserDropDownContainer user={user} avatarUrl={avatarUrl} userName={userName} />
      <HeaderDivider />
      <LogOut />
    </HeaderContent>
  </LayoutHeader>
);

export default HeaderAuthorized;