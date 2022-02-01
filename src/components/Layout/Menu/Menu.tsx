import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemText } from '@mui/material';

import { IMenuProps } from 'types/menu';

import { MenuTabs, MenuTabsWrapper, TabWrapper } from './styled';

const Menu: React.FC<IMenuProps> = ({ menuList, menuItem, classes }) => {
  return (
    <MenuTabs>
      <MenuTabsWrapper>
        {menuList.map((item) =>
          menuItem === item.path ? (
            <TabWrapper
              id={item.path}
              key={item.title}
              component={Link}
              classes={{ root: classes.selected }}
              to={item.path}
            >
              <ListItemIcon classes={{ root: classes.selectedLogo }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{ variant: 'h6' }}
                classes={{ root: classes.selectedText }}
              />
            </TabWrapper>
          ) : (
            <TabWrapper
              id={item.path}
              key={item.title}
              component={Link}
              classes={{ root: classes.default }}
              to={item.path}
            >
              <ListItemIcon classes={{ root: classes.default }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{ variant: 'h6' }}
                classes={{ root: classes.default }}
              />
            </TabWrapper>
          ),
        )}
      </MenuTabsWrapper>
    </MenuTabs>
  );
};

export default Menu;
