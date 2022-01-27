import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText } from '@mui/material';

import { IMenuProps } from 'types/menu';

import { MenuTabs, MenuTabsWrapper, TabWrapper } from './styled';

const Menu: React.FC<IMenuProps> = ({ menuList, menuItem, classes }) => {
  return (
    <MenuTabs>
      <MenuTabsWrapper>
        {menuList.map((item) => (
          <TabWrapper
            id={item.path}
            key={item.title}
            component={Link}
            classes={
              menuItem === item.path ? { root: classes.selected } : { root: classes.default }
            }
            to={item.path}
          >
            <ListItemIcon
              classes={
                menuItem === item.path ? { root: classes.selectedLogo } : { root: classes.default }
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
          </TabWrapper>
        ))}
      </MenuTabsWrapper>
    </MenuTabs>
  );
};

export default Menu;
