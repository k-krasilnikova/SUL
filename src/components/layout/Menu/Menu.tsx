import React from 'react';
import { Link } from 'react-router-dom';
import {
  AccountCircleOutlined,
  ArticleOutlined,
  FolderSpecialOutlined,
  AddToQueueOutlined,
  EmojiPeopleOutlined,
  AssessmentOutlined,
  QuizOutlined,
} from '@mui/icons-material';
import { ListItemIcon, ListItemText, ListItemButton } from '@mui/material';

import PATHS from 'constants/routes';
import { MenuTabs } from 'components/Layout/styled';

const EMPLOYEE_MENU = [
  {
    path: PATHS.profile,
    title: 'Profile',
    icon: <AccountCircleOutlined fontSize="large" />,
  },
  {
    path: PATHS.coursesList,
    title: 'Courses List',
    icon: <ArticleOutlined fontSize="large" />,
  },
  {
    path: PATHS.myCourses,
    title: 'My Courses',
    icon: <AddToQueueOutlined fontSize="large" />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <QuizOutlined fontSize="large" />,
  },
];

const MANAGER_MENU = [
  {
    path: PATHS.profile,
    title: 'Profile',
    icon: <AccountCircleOutlined fontSize="large" />,
  },
  {
    path: PATHS.coursesList,
    title: 'Courses List',
    icon: <ArticleOutlined fontSize="large" />,
  },
  {
    path: PATHS.myCourses,
    title: 'My Courses',
    icon: <FolderSpecialOutlined fontSize="large" />,
  },
  {
    path: PATHS.requests,
    title: 'Pending Requests',
    icon: <AddToQueueOutlined fontSize="large" />,
  },
  {
    path: PATHS.employees,
    title: 'Employees',
    icon: <EmojiPeopleOutlined fontSize="large" />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <QuizOutlined fontSize="large" />,
  },
];

const ADMIN_MENU = [
  {
    path: PATHS.coursesList,
    title: 'Courses List',
    icon: <ArticleOutlined fontSize="large" />,
  },
  {
    path: PATHS.skills,
    title: 'Skills',
    icon: <AssessmentOutlined fontSize="large" />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <QuizOutlined fontSize="large" />,
  },
];

const ROLES_MENU = {
  employee: EMPLOYEE_MENU,
  manager: MANAGER_MENU,
  admin: ADMIN_MENU,
};

const Menu: React.FC = () => {
  const menuItems = ROLES_MENU['employee'];

  return (
    <MenuTabs>
      {menuItems.map((item, key) => (
        <ListItemButton key={key} component={Link} to={item.path}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} primaryTypographyProps={{ variant: 'h6' }} />
        </ListItemButton>
      ))}
    </MenuTabs>
  );
};

export default Menu;
