import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useGetProfile } from 'api/profile';
import { Role } from 'constants/menuRoles';
import { IRoleRouteProps } from './types';

const RoleRoute: FC<IRoleRouteProps> = ({ children, roles }) => {
  const { data: userProfileResponse } = useGetProfile();
  const isAllowed = roles?.includes(userProfileResponse?.role as Role);
  const isPageReloaded = window.performance && window.performance.navigation.type === 1;

  return isAllowed || isPageReloaded ? <>{children}</> : <Navigate replace to="/not-found" />;
};

export default RoleRoute;
