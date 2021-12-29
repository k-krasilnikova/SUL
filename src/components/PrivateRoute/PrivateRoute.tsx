import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PATHS } from 'constants/routes';

const PrivateRoute = () => {
  const user = 'some auth information';
  return user ? <Outlet /> : <Navigate to={PATHS.signIn} />;
};

export default PrivateRoute;
