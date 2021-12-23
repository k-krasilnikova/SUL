import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import HelpIcon from '@mui/icons-material/Help';

import PATHS from 'constants/routes';
import { MenuTabs, MenuTab, MenuTabName } from 'components/Layout/styled';

const Menu: React.FC = () => (
  <MenuTabs>
    <NavLink to={PATHS.profile}>
      <MenuTab>
        <AccountCircleIcon fontSize="large" color="inherit" />
        <MenuTabName>Profile</MenuTabName>
      </MenuTab>
    </NavLink>
    <NavLink to={PATHS.coursesList}>
      <MenuTab>
        <ArticleIcon fontSize="large" color="inherit" />
        <MenuTabName>Possible courses</MenuTabName>
      </MenuTab>
    </NavLink>
    <NavLink to={PATHS.myCourses}>
      <MenuTab>
        <FolderSpecialIcon fontSize="large" color="inherit" />
        <MenuTabName>My courses</MenuTabName>
      </MenuTab>
    </NavLink>
    <NavLink to={PATHS.help}>
      <MenuTab>
        <HelpIcon fontSize="large" color="inherit" />
        <MenuTabName>Help</MenuTabName>
      </MenuTab>
    </NavLink>
  </MenuTabs>
);

export default Menu;
