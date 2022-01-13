import React from 'react';
import {
  ArticleOutlined,
  FolderSpecialOutlined,
  AddToQueueOutlined,
  EmojiPeopleOutlined,
  AssessmentOutlined,
  QuizOutlined,
} from '@mui/icons-material';

import { IRolesMenu, MenuItemProps } from 'types/menu';

import { PATHS } from './routes';

const EMPLOYEE_MENU: Array<MenuItemProps> = [
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

const MANAGER_MENU: Array<MenuItemProps> = [
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

const ADMIN_MENU: Array<MenuItemProps> = [
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

export const ROLES_MENU: IRolesMenu = {
  employee: EMPLOYEE_MENU,
  manager: MANAGER_MENU,
  admin: ADMIN_MENU,
};
