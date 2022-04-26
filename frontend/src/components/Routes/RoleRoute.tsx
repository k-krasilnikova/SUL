import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useGetProfile } from 'api/profile';
import { Role } from 'constants/menuRoles';
import { PATHS } from 'constants/routes';
import { Numbers } from 'enums/numbers';

import { IRoleRouteProps } from './types';

const RoleRoute: FC<IRoleRouteProps> = ({ children, roles }) => {
  const { data: userProfileResponse } = useGetProfile();
  const isAllowed = roles?.includes(userProfileResponse?.role as Role);
  const isPageReloaded = window.performance && window.performance.navigation.type === Numbers.one;

  return isAllowed || isPageReloaded ? <>{children}</> : <Navigate replace to={PATHS.notFound} />;
};

export default RoleRoute;
