import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import AuthorizedLayout from 'components/Layout';
import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';

const AuthRoute: FC = () => {
  const { pathname } = useLocation();

  const accessToken = getAuthResponseData();

  return accessToken ? (
    <AuthorizedLayout>
      <Outlet />
    </AuthorizedLayout>
  ) : (
    <Navigate to={PATHS.signIn} state={{ from: pathname }} />
  );
};

export default AuthRoute;
