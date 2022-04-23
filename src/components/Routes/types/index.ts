import { ReactNode } from 'react';

import { Role } from 'constants/menuRoles';

export interface IRoleRouteProps {
  children: ReactNode;
  roles?: Role[];
}
