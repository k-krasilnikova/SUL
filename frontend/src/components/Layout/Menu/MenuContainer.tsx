import React, { useState, useEffect } from 'react';

import { PATHS } from 'constants/routes';
import { useGetProfile } from 'api/profile';
import { ROLES_MENU } from 'constants/menuRoles';
import { setCurrentMenuPath, getCurrentMenuPath } from 'utils/helpers/selectMenuHelpers';

import Menu from './Menu';
import { useListStyles } from './styled';

const MenuContainer: React.FC = () => {
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

  return <Menu menuList={menuItems} menuItem={menuItem} classes={classes} />;
};

export default MenuContainer;
