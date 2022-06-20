import { forwardRef, ForwardedRef } from 'react';
import { NavLink } from 'react-router-dom';

import { ICustomNavLinkProps } from './types';

const CustomNavLink = (
  { children, ...props }: ICustomNavLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) => (
  <NavLink ref={ref} {...props}>
    {children}
  </NavLink>
);

export default forwardRef(CustomNavLink);
