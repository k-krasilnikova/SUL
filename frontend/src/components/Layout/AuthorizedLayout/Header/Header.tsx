import { FC } from 'react';

import { PATHS } from 'constants/routes';
import Avatar from 'components/Avatar';
import Notifications from 'components/NotificationsBar';
import { logOutIcon, menuMobileIcon } from 'icons';
import { brandLogo } from 'images';
import { Size } from 'enums/sizes';
import { IHeaderProps } from 'components/Layout/types';

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

const Header: FC<IHeaderProps> = ({
  userInfo,
  notifications,
  isMobileMenuOpen,
  handleConfirmOpen,
  toggleMobileMenu,
}) => {
  const { avatar, firstName, lastName } = userInfo || {};

  return (
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
          <Avatar avatar={avatar} size={Size.small} />
          <UserName>{`${firstName} ${lastName}`}</UserName>
        </UserBlock>
        <LogOut onClick={handleConfirmOpen}>
          <img alt="logOut" src={logOutIcon} />
        </LogOut>
        <MobileMenuIcon openMenu={isMobileMenuOpen} onClick={toggleMobileMenu}>
          <img alt="menu" src={menuMobileIcon} />
        </MobileMenuIcon>
      </HeaderContent>
    </LayoutHeader>
  );
};
export default Header;
