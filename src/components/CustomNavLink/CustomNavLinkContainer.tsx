import { forwardRef, ForwardedRef } from 'react';

import { useGetCoursesPaths } from 'hooks';
import { PATHS } from 'constants/routes';

import CustomNavLink from './CustomNavLink';
import { ICustomNavLinkProps } from './types';

const CustomNavLinkContainer = (
  {
    children,
    to,
    activeClassName,
    inactiveClassName,
    defaultClassName,
    ...props
  }: ICustomNavLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const { coursesPath, myCoursesPath } = useGetCoursesPaths();

  const currentPathProxy = {
    [PATHS.myCourses]: myCoursesPath,
    [PATHS.coursesList]: coursesPath,
  };

  return (
    <CustomNavLink
      ref={ref}
      to={currentPathProxy[to as string] ?? to}
      className={({ isActive }) =>
        ` ${defaultClassName} ${isActive ? activeClassName : inactiveClassName}`
      }
      {...props}
    >
      {children}
    </CustomNavLink>
  );
};

export default forwardRef(CustomNavLinkContainer);
