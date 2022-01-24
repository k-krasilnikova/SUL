import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';

import { MenuProps } from 'types/menu';

import { MenuTabs } from './styled';

const Menu: React.FC<MenuProps> = ({ menuList, menuItem, setCurrentMenuPath, classes }) => {
  return (
    <MenuTabs>
      {menuList.map((item) => (
        <ListItemButton
          id={item.path}
          key={item.title}
          component={Link}
          classes={menuItem === item.path ? { root: classes.selected } : { root: classes.default }}
          to={item.path}
          onClick={(e: any) => setCurrentMenuPath(e.currentTarget.id)}
        >
          <ListItemIcon
            classes={
              menuItem === item.path
                ? { root: classes.selectedLogo }
                : { root: classes.defaultLogo }
            }
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            primaryTypographyProps={{ variant: 'h6' }}
            classes={
              menuItem === item.path ? { root: classes.selectedText } : { root: classes.default }
            }
          />
        </ListItemButton>
      ))}
    </MenuTabs>
  );
};

export default Menu;
