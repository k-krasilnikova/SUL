import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Input } from '@mui/material';
import { Star as StarIcon, Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { UserAvatar } from 'components/Avatar';
import { alertIcon, filterIcon, logOutIcon } from 'icons';

import {
  LayoutHeader,
  SpaceHolder,
  BrandLogo,
  HeaderContent,
  Search,
  Alert,
  Filter,
  UserBlock,
  UserName,
  LogOut,
} from './styled';
const Header: React.FC<User> = ({
  firstName,
  lastName,
  role,
  unit,
  department,
  group,
  myCoursesNumber,
  avatar,
}) => (
  <LayoutHeader container>
    <NavLink to={PATHS.home}>
      <BrandLogo>Skill Up Level</BrandLogo>
    </NavLink>
    <HeaderContent>
      <Search
        disableUnderline={true}
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" />
          </InputAdornment>
        }
      />
      <Alert>
        <img src={alertIcon} />
      </Alert>
      <Filter>
        <img src={filterIcon} />
      </Filter>
      <SpaceHolder />
      <UserBlock>
        <UserAvatar size="small" />
        <UserName>{`${firstName} ${lastName}`}</UserName>
      </UserBlock>
      <LogOut>
        <img src={logOutIcon} />
      </LogOut>
    </HeaderContent>
  </LayoutHeader>
);
export default Header;
