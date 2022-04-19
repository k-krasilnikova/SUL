import React from 'react';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { Notification as NotificationType } from 'types/notification';
import Avatar from 'components/Avatar';
import Notifications from 'components/NotificationsBar';
import { logOutIcon, menuMobileIcon } from 'icons';
import { brandLogo } from 'images';

import {
  LayoutHeader,
  BrandLogoLink,
  BrandLogo,
  HeaderContent,
  UserBlock,
  UserName,
  LogOut,
  MobileMenuIcon,
} from './styled';
import SearchCourses from './SearchCourses';

interface Props {
  handleConfirm: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  notifications?: NotificationType[];
}

type HeaderProps = User & Props;

const Header: React.FC<HeaderProps> = ({
  firstName,
  lastName,
  avatar,
  notifications,
  handleConfirm,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <LayoutHeader container>
    <BrandLogoLink to={PATHS.profile}>
      <BrandLogo alt=":iTechArt" src={brandLogo} />
    </BrandLogoLink>
    <HeaderContent>
      <SearchCourses />
      <Notifications
        notifications={notifications}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <UserBlock to={PATHS.profile}>
        <Avatar avatar={avatar} size="small" />
        <UserName>{`${firstName} ${lastName}`}</UserName>
      </UserBlock>
      <LogOut onClick={handleConfirm}>
        <img alt="logOut" src={logOutIcon} />
      </LogOut>
      <MobileMenuIcon openMenu={isMobileMenuOpen} onClick={toggleMobileMenu}>
        <img alt="menu" src={menuMobileIcon} />
      </MobileMenuIcon>
    </HeaderContent>
  </LayoutHeader>
);
export default Header;
