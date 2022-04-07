import React from 'react';
import { Navigate } from 'react-router-dom';
import { useGetProfile } from 'api/profile';
import { ROLE } from 'constants/menuRoles';

interface IAuthRouteProps {
  children: React.ReactNode;
  roles?: Array<ROLE>;
}

const AuthRoute: React.FC<IAuthRouteProps> = ({ children, roles }) => {
  const { data } = useGetProfile();
  const userHasRequiredRole = roles?.includes(data?.role as ROLE);
  return userHasRequiredRole ? <>{children}</> : <Navigate to="/not-found" />;
};

export default AuthRoute;
