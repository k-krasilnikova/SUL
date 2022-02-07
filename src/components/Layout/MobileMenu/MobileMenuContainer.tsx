import React, { useState, useEffect } from 'react';

import { PATHS } from 'constants/routes';
import { ROLES_MENU } from 'constants/mobileMenuRoles';
import { useGetProfile } from 'api/profile';
import { setCurrentMenuPath, getCurrentMenuPath } from 'utils/helpers/selectMenuHelpers';

import MobileMenu from './MobileMenu';
import { useListStyles } from './styled';

const MobileMenuContainer: React.FC = () => {
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
  return <MobileMenu menuList={menuItems} menuItem={menuItem} classes={classes} />;
};

export default MobileMenuContainer;
