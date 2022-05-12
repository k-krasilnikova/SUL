import { FC } from 'react';

import { ROLES_MENU } from 'constants/menuRoles';
import { getUserProfileCache } from 'utils/cache';
import { IMenuContainerProps, TMenuNavLinkClasses } from 'components/Layout/types';

import Menu from './Menu';
import { useListStyles } from './styled';

const MenuContainer: FC<IMenuContainerProps> = ({ isMobileVersion, ...props }) => {
  const classes = useListStyles({ isMobileVersion }) as TMenuNavLinkClasses;

  const userProfileCache = getUserProfileCache();

  const menuRole = userProfileCache?.role;
  const menuItems = menuRole ? ROLES_MENU[menuRole] : [];

  return (
    <Menu
      classes={classes}
      menuItemsList={menuItems}
      isMobileVersion={isMobileVersion}
      {...props}
    />
  );
};

export default MenuContainer;
