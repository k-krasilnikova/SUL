import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';

const PrivateRoute = () => {
  const accessToken = getAuthResponseData();
  return accessToken ? <Outlet /> : <Navigate to={PATHS.signIn} />;
};

export default PrivateRoute;
