import { Icon } from '@mui/material';

import {
  coursesListIcon,
  myCoursesIcon,
  helpIcon,
  pendingIcon,
  employeeIcon,
  skillsIcon,
  assessmentsIcon,
} from 'icons/menuIcons';
import { BadgeType } from 'enums/badgeType';
import { IRolesMenu, IMenuItemProps } from 'types/menu';

import { PATHS } from './routes';

const EMPLOYEE_MENU: IMenuItemProps[] = [
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

const MANAGER_MENU: IMenuItemProps[] = [
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
    badgeType: BadgeType.requests,
    withBadge: true,
  },
  {
    path: PATHS.pendingAssessments,
    title: 'Assessments',
    icon: <Icon fontSize="large" component={assessmentsIcon} />,
    badgeType: BadgeType.assessments,
    withBadge: true,
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

const ADMIN_MENU: IMenuItemProps[] = [
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

export enum Role {
  admin = 'admin',
  employee = 'employee',
  manager = 'manager',
}
