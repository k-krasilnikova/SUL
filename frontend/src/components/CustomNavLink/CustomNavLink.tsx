import { forwardRef, ForwardedRef } from 'react';
import { NavLink } from 'react-router-dom';

import { ICustomNavLinkProps } from './types';

const CustomNavLink = (
  { children, activeClassName, inactiveClassName, defaultClassName, ...props }: ICustomNavLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) => (
  <NavLink
    ref={ref}
    className={({ isActive }) =>
      ` ${defaultClassName} ${isActive ? activeClassName : inactiveClassName}`
    }
    {...props}
  >
    {children}
  </NavLink>
);

export default forwardRef(CustomNavLink);
