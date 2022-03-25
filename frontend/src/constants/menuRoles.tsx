import React from 'react';
import { Icon } from '@mui/material';

import { IRolesMenu, MenuItemProps } from 'types/menu';
import {
  coursesListIcon,
  myCoursesIcon,
  helpIcon,
  pendingIcon,
  employeeIcon,
  skillsIcon,
} from 'icons/menuIcons';

import { PATHS } from './routes';

const EMPLOYEE_MENU: Array<MenuItemProps> = [
  {
    path: PATHS.coursesList,
    title: 'Courses list',
    icon: <Icon fontSize="large" component={coursesListIcon} />,
  },
  {
    path: PATHS.myCourses,
    title: 'My courses',
    icon: <Icon fontSize="large" component={myCoursesIcon} />,
  },
  {
    path: PATHS.skillsMap,
    title: 'Skills map',
    icon: <Icon fontSize="large" component={skillsIcon} />,
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
    title: 'Courses list',
    icon: <Icon fontSize="large" component={coursesListIcon} />,
  },
  {
    path: PATHS.myCourses,
    title: 'My courses',
    icon: <Icon fontSize="large" component={myCoursesIcon} />,
  },
  {
    path: PATHS.requests,
    title: 'Pending requests',
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
    title: 'Courses list',
    icon: <Icon fontSize="large" component={coursesListIcon} />,
  },
  {
    path: PATHS.skills,
    title: 'Skills',
    icon: <Icon fontSize="large" component={skillsIcon} />,
  },
];

export const ROLES_MENU: IRolesMenu = {
  employee: EMPLOYEE_MENU,
  manager: MANAGER_MENU,
  admin: ADMIN_MENU,
};
