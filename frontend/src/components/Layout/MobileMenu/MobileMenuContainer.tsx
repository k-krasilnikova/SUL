import React, { useState } from 'react';

import { useGetProfile } from 'api/profile';
import { useLogOut } from 'api/logOut/';
import { ConfirmLogOutModalWindow } from 'components/Layout/Header/ConfirmLogOut';
import { ROLES_MENU } from 'constants/menuRoles';

import MobileMenu from './MobileMenu';
import { useListStyles } from './styled';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

const EMPTY_ARGUMENT = null;
const TAB_HEADER = null;

const MobileMenuContainer: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  firstName,
  lastName,
  avatar,
}) => {
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);
  const { data } = useGetProfile();
  const menuRole = data?.role;
  const menuItems = menuRole ? ROLES_MENU[menuRole] : [];
  const { pathname } = window.location;
  const classes = useListStyles();

  const { mutateAsync } = useLogOut();
  const handleConfirm = (): void => {
    setConfirmOpen(true);
  };
  const handleLogOut = (): void => {
    mutateAsync(EMPTY_ARGUMENT);
  };
  const cancelLogOut = (): void => {
    setConfirmOpen(false);
  };
  const preventMenuClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };
  return (
    <>
      <MobileMenu
        menuList={menuItems}
        classes={classes}
        pathname={pathname}
        isTabHeader={TAB_HEADER}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        firstName={firstName}
        lastName={lastName}
        avatar={avatar}
        handleConfirm={handleConfirm}
        preventMenuClose={preventMenuClose}
      />
      <ConfirmLogOutModalWindow
        handleLogOut={handleLogOut}
        isConfirmOpen={isConfirmOpen}
        cancelLogOut={cancelLogOut}
      />
    </>
  );
};

export default MobileMenuContainer;
