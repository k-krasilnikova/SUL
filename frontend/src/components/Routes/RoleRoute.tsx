import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useGetProfile } from 'api/profile';
import Loader from 'components/Loader';
import { Role } from 'constants/menuRoles';
import { PATHS } from 'constants/routes';
import { Loaders } from 'enums/loader';

import { IRoleRouteProps } from './types';

const RoleRoute: FC<IRoleRouteProps> = ({ children, roles }) => {
  const { data: userProfileResponse, isLoading: isUserProfileLoading } = useGetProfile();

  if (isUserProfileLoading) {
    return <Loader color="primary" type={Loaders.page} />;
  }

  const isAllowed = roles?.includes(userProfileResponse?.role as Role);

  return isAllowed ? <>{children}</> : <Navigate replace to={PATHS.notFound} />;
};

export default RoleRoute;
