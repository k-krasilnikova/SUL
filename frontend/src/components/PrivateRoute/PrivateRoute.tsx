import React from 'react';
import { Navigate } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';

const PrivateRoute: React.FC<React.ReactNode> = () => {
  const accessToken = getAuthResponseData();
  return accessToken ? <Navigate to={PATHS.profile} /> : <Navigate to={PATHS.signIn} />;
};

export default PrivateRoute;
