import React from 'react';

import { ROLES_MENU } from 'constants/menuRoles';

import Menu from './Menu';

const MenuContainer: React.FC = () => {
  const menuItems = ROLES_MENU['employee'];

  return <Menu menuList={menuItems} />;
};

export default MenuContainer;
