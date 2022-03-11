import React from 'react';

import { PATHS } from 'constants/routes';
import { User } from 'types/user';
import { Notification as NotificationType } from 'types/notification';
import { UserAvatar } from 'components/Avatar';
import Notifications from 'components/NotificationsBar';
import { Search } from 'components/Layout/Header/SearchCourses';
import { logOutIcon, menuMobileIcon } from 'icons';
import { brandLogo } from 'images';

import {
  LayoutHeader,
  SpaceHolder,
  BrandLogoLink,
  BrandLogo,
  HeaderContent,
  UserBlock,
  UserName,
  LogOut,
  MobileMenuIcon,
} from './styled';

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
      <Search />
      <Notifications
        notifications={notifications}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
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
