import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';

import { MenuTabs } from './styled';

interface MenuItemProps {
  path: string;
  title: string;
  icon: React.ReactElement;
}

interface MenuProps {
  menuList: MenuItemProps[];
  children?: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ menuList }) => (
  <MenuTabs>
    {menuList.map((item, key) => (
      <ListItemButton key={key} component={Link} to={item.path}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'h6' }} />
      </ListItemButton>
    ))}
  </MenuTabs>
);

export default Menu;
