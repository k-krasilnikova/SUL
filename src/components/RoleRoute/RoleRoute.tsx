import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetProfile } from 'api/profile';
import { ROLE } from 'constants/menuRoles';

interface IRoleRouteProps {
  children: React.ReactNode;
  roles?: Array<ROLE>;
}

const RoleRoute: React.FC<IRoleRouteProps> = ({ children, roles }) => {
  const { data: userProfileResponse } = useGetProfile();
  const isAllowed = roles?.includes(userProfileResponse?.role as ROLE);
  return isAllowed ? <>{children}</> : <Navigate to="/not-found" />;
};

export default RoleRoute;
