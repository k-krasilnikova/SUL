import { FC } from 'react';

import { ROLES_MENU } from 'constants/menuRoles';
import { getUserProfileCache } from 'utils/cache';
import { IMenuContainerProps } from 'components/Layout/types';

import Menu from './Menu';
import { useListStyles } from './styled';

const MenuContainer: FC<IMenuContainerProps> = (props) => {
  const classes = useListStyles();

  const userProfileCache = getUserProfileCache();

  const menuRole = userProfileCache?.role;
  const menuItems = menuRole ? ROLES_MENU[menuRole] : [];

  return <Menu classes={classes} menuItemsList={menuItems} {...props} />;
};

export default MenuContainer;
