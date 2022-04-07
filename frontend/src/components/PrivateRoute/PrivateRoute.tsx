import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import { getAuthResponseData, TokenTypes } from 'utils/helpers/getAuthResponseData';

const PrivateRoute: React.FC<React.ReactNode> = () => {
  const accessToken = getAuthResponseData(TokenTypes.accessToken);
  return accessToken ? <Outlet /> : <Navigate to={PATHS.signIn} />;
};

export default PrivateRoute;
