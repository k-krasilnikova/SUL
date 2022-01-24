/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Icon } from '@mui/material';
import {
  ArticleOutlined,
  FolderSpecialOutlined,
  AddToQueueOutlined,
  EmojiPeopleOutlined,
  AssessmentOutlined,
  QuizOutlined,
} from '@mui/icons-material';

import { IRolesMenu, MenuItemProps } from 'types/menu';
import {
  coursesListIcon,
  myCoursesIcon,
  helpIcon,
  pendingIcon,
  employeeIcon,
} from 'icons/menuIcons';

import { PATHS } from './routes';

const EMPLOYEE_MENU: Array<MenuItemProps> = [
  {
    path: PATHS.coursesList,
    title: 'Courses List',
    icon: <Icon fontSize="large" component={coursesListIcon} />,
  },
  {
    path: PATHS.myCourses,
    title: 'My Courses',
    icon: <Icon fontSize="large" component={myCoursesIcon} />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <Icon fontSize="large" component={helpIcon} />,
  },
];

const MANAGER_MENU: Array<MenuItemProps> = [
  {
    path: PATHS.coursesList,
    title: 'Courses List',
    icon: <Icon fontSize="large" component={coursesListIcon} />,
  },
  {
    path: PATHS.myCourses,
    title: 'My Courses',
    icon: <Icon fontSize="large" component={myCoursesIcon} />,
  },
  {
    path: PATHS.requests,
    title: 'Pending Requests',
    icon: <Icon fontSize="large" component={pendingIcon} />,
  },
  {
    path: PATHS.employees,
    title: 'Employees',
    icon: <Icon fontSize="large" component={employeeIcon} />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <Icon fontSize="large" component={helpIcon} />,
  },
];

const ADMIN_MENU: Array<MenuItemProps> = [
  {
    path: PATHS.coursesList,
    title: 'Courses List',
    icon: <Icon fontSize="large" component={coursesListIcon} />,
  },
  {
    path: PATHS.skills,
    title: 'Skills',
    icon: <AssessmentOutlined fontSize="large" />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <Icon fontSize="large" component={helpIcon} />,
  },
];

export const ROLES_MENU: IRolesMenu = {
  employee: EMPLOYEE_MENU,
  manager: MANAGER_MENU,
  admin: ADMIN_MENU,
};
