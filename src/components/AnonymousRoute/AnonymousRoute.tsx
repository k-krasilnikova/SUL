import React from 'react';
import { Navigate } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import { getAuthResponseData, TokenTypes } from 'utils/helpers/getAuthResponseData';

interface IAnonymousRoute {
  children: React.ReactNode;
}

const AnonymousRoute: React.FC<IAnonymousRoute> = ({ children }) => {
  const accessToken = getAuthResponseData(TokenTypes.accessToken);
  return accessToken ? <Navigate to={PATHS.profile} /> : <>{children}</>;
};

export default AnonymousRoute;
