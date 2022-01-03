import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';
import { COOKIE_VALUES } from 'constants/authConstants';

const PrivateRoute = () => {
  const accessToken = getAuthResponseData(COOKIE_VALUES?.uniqAccessToken);
  return accessToken ? <Outlet /> : <Navigate to={PATHS.signIn} />;
};

export default PrivateRoute;
