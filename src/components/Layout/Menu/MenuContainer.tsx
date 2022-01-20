import React from 'react';

import { useGetProfile } from 'api/profile';
import { ROLES_MENU } from 'constants/menuRoles';

import Menu from './Menu';

const MenuContainer: React.FC = () => {
  const { data } = useGetProfile();
  const menuRole = data?.role;
  const menuItems = menuRole ? ROLES_MENU[menuRole] : [];
  const { pathname } = window.location;

  return <Menu menuList={menuItems} toggleTab={pathname} />;
};

export default MenuContainer;
