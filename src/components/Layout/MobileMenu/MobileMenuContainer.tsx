import React, { useState, useEffect } from 'react';

import { useGetProfile } from 'api/profile';
import { useLogOut } from 'api/logOut/';
import ConfirmLogOut from 'components/Layout/Header/ConfirmLogOut/ConfirmLogOut';
import { PATHS } from 'constants/routes';
import { ROLES_MENU } from 'constants/mobileMenuRoles';
import { setCurrentMenuPath, getCurrentMenuPath } from 'utils/helpers/selectMenuHelpers';

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
  const getInitMenuName = getCurrentMenuPath();
  const [menuItem, setMenuItem] = useState<string | undefined>(getInitMenuName);

  useEffect(() => {
    const PATH_VALUES = Object.values(PATHS);
    PATH_VALUES.forEach((route) => {
      if (pathname.includes(route) && route !== PATHS.home) {
        setMenuItem(route);
        setCurrentMenuPath(route);
      }
    });
  }, [pathname]);
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
  return (
    <>
      <MobileMenu
        menuList={menuItems}
        menuItem={menuItem}
        classes={classes}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        firstName={firstName}
        lastName={lastName}
        avatar={avatar}
        handleConfirm={handleConfirm}
      />
      <ConfirmLogOut
        handleLogOut={handleLogOut}
        isConfirmOpen={isConfirmOpen}
        cancelLogOut={cancelLogOut}
      />
    </>
  );
};

export default MobileMenuContainer;
