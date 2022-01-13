import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';

import { MenuProps } from 'types/menu';

import { MenuTabs } from './styled';

const Menu: React.FC<MenuProps> = ({ menuList }) => (
  <MenuTabs>
    {menuList.map((item) => (
      <ListItemButton key={item.title} component={Link} to={item.path}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'h6' }} />
      </ListItemButton>
    ))}
  </MenuTabs>
);

export default Menu;
