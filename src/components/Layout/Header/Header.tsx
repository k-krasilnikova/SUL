import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ClickAwayListener } from '@mui/material';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { Notification } from 'types/notification';
import { UserAvatar } from 'components/Avatar';
import NotificationsBar from 'components/NotificationsBar';
import { alertIcon, logOutIcon, menuMobileIcon } from 'icons';
import { brandLogo } from 'images';

import {
  LayoutHeader,
  SpaceHolder,
  BrandLogoLink,
  BrandLogo,
  HeaderContent,
  Search,
  NotificationsButton,
  UserBlock,
  UserName,
  LogOut,
  MobileMenuIcon,
} from './styled';

interface Props {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  notifications?: Array<Notification>;
  isNotificationsOpen: boolean;
  handleNotificationsOpen: () => void;
  handleNotificationsClose: () => void;
  handleConfirm: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}
type HeaderProps = User & Props;

const Header: React.FC<HeaderProps> = ({
  firstName,
  lastName,
  avatar,
  notifications,
  isNotificationsOpen,
  handleNotificationsOpen,
  handleNotificationsClose,
  handleConfirm,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <LayoutHeader container>
    <BrandLogoLink to={PATHS.profile}>
      <BrandLogo alt=":iTechArt" src={brandLogo} />
    </BrandLogoLink>
    <HeaderContent>
      <Search
        className="search"
        disableUnderline
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" fontSize="medium" />
          </InputAdornment>
        }
      />
      <ClickAwayListener onClickAway={handleNotificationsClose}>
        <>
          <NotificationsButton onClick={handleNotificationsOpen}>
            <img alt="notifications" src={alertIcon} />
            {isNotificationsOpen && <NotificationsBar notifications={notifications} />}
          </NotificationsButton>
        </>
      </ClickAwayListener>
      <SpaceHolder />
      <UserBlock to={PATHS.profile}>
        <UserAvatar avatar={avatar} size="small" />
        <UserName>{`${firstName} ${lastName}`}</UserName>
      </UserBlock>
      <LogOut onClick={handleConfirm}>
        <img alt="log_out" src={logOutIcon} />
      </LogOut>
      <MobileMenuIcon openMenu={isMobileMenuOpen} onClick={toggleMobileMenu}>
        <img alt="menu" src={menuMobileIcon} />
      </MobileMenuIcon>
    </HeaderContent>
  </LayoutHeader>
);
export default Header;
