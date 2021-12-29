import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import accessToken from 'constants/accessToken';

const PrivateRoute = () => {
  return accessToken ? <Outlet /> : <Navigate to={PATHS.signIn} />;
};

export default PrivateRoute;
