import React from 'react';

import { ROLES_MENU } from 'constants/menuRoles';
import { useGetProfile } from 'api/profile';

import Menu from './Menu';
import { useListStyles } from './styled';

interface Props {
  isSqueeze?: boolean;
  handleSqueeze?: () => void;
}

const MenuContainer: React.FC<Props> = ({ handleSqueeze, isSqueeze }) => {
  const { data } = useGetProfile();
  const menuRole = data?.role;
  const menuItems = menuRole ? ROLES_MENU[menuRole] : [];
  const { pathname } = window.location;
  const classes = useListStyles();
  const TAB_HEADER = null;

  return (
    <Menu
      menuList={menuItems}
      classes={classes}
      pathname={pathname}
      isSqueeze={isSqueeze}
      handleSqueeze={handleSqueeze}
      isTabHeader={TAB_HEADER}
    />
  );
};

export default MenuContainer;
