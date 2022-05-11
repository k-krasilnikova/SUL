import { NavLinkProps } from 'react-router-dom';

export interface ICustomNavLinkProps extends NavLinkProps {
  defaultClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}
