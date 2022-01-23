/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import { MENU_VALUES } from 'constants/menuPaths';
import { PATHS } from 'constants/routes';
import { useGetProfile } from 'api/profile';
import { ROLES_MENU } from 'constants/menuRoles';
import { setCurrentMenuPath } from 'utils/helpers/setCurrentMenuPath';
import { getCurrentMenuPath } from 'utils/helpers/getCurrentMenuPath';

import Menu from './Menu';

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
      pathname.includes(route) && route !== PATHS.home && setMenuItem(route);
    });
  }, [pathname]);

  return <Menu menuList={menuItems} menuItem={menuItem} setCurrentMenuPath={setCurrentMenuPath} />;
};

export default MenuContainer;
