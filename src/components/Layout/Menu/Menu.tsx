/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText } from '@mui/material';

import { MenuProps } from 'types/menu';

import { MenuTabs, ListItemWraper } from './styled';

const Menu: React.FC<MenuProps> = ({ menuList, menuItem, setCurrentMenuPath }) => {
  return (
    <MenuTabs>
      {menuList.map((item) => (
        <ListItemWraper
          id={item.path}
          key={item.title}
          component={Link}
          to={item.path}
          selected={menuItem === item.path}
          onClick={(e) => setCurrentMenuPath(e.currentTarget.id)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'h6' }} />
        </ListItemWraper>
      ))}
    </MenuTabs>
  );
};

export default Menu;
