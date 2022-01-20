import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText } from '@mui/material';

import { MenuProps } from 'types/menu';

import { MenuTabs, ListItemWraper } from './styled';

const Menu: React.FC<MenuProps> = ({ menuList, toggleTab }) => {
  return (
    <MenuTabs>
      {menuList.map((item) => (
        <ListItemWraper
          key={item.title}
          component={Link}
          to={item.path}
          selected={toggleTab === item.path}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'h6' }} />
        </ListItemWraper>
      ))}
    </MenuTabs>
  );
};

export default Menu;
