import React from 'react';
import { Icon } from '@mui/material';

import { IRolesMenu, MenuItemProps } from 'types/menu';
import {
  coursesListIcon,
  myCoursesIcon,
  helpIcon,
  pendingIcon,
  employeesIcon,
  skillsIcon,
} from 'icons/mobileMenuIcons';

import { PATHS } from './routes';

const EMPLOYEE_MENU: Array<MenuItemProps> = [
  {
    path: PATHS.coursesList,
    title: 'Courses list',
    icon: <Icon fontSize="medium" component={coursesListIcon} />,
  },
  {
    path: PATHS.myCourses,
    title: 'My courses',
    icon: <Icon fontSize="medium" component={myCoursesIcon} />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <Icon fontSize="medium" component={helpIcon} />,
  },
];

const MANAGER_MENU: Array<MenuItemProps> = [
  {
    path: PATHS.coursesList,
    title: 'Courses list',
    icon: <Icon fontSize="medium" component={coursesListIcon} />,
  },
  {
    path: PATHS.myCourses,
    title: 'My courses',
    icon: <Icon fontSize="medium" component={myCoursesIcon} />,
  },
  {
    path: PATHS.requests,
    title: 'Pending requests',
    icon: <Icon fontSize="medium" component={pendingIcon} />,
  },
  {
    path: PATHS.employees,
    title: 'Employees',
    icon: <Icon fontSize="medium" component={employeesIcon} />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <Icon fontSize="medium" component={helpIcon} />,
  },
];

const ADMIN_MENU: Array<MenuItemProps> = [
  {
    path: PATHS.coursesList,
    title: 'Courses list',
    icon: <Icon fontSize="medium" component={coursesListIcon} />,
  },
  {
    path: PATHS.skills,
    title: 'Skills',
    icon: <Icon fontSize="medium" component={skillsIcon} />,
  },
  {
    path: PATHS.help,
    title: 'Help',
    icon: <Icon fontSize="medium" component={helpIcon} />,
  },
];

export const ROLES_MENU: IRolesMenu = {
  employee: EMPLOYEE_MENU,
  manager: MANAGER_MENU,
  admin: ADMIN_MENU,
};
