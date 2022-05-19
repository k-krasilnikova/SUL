import { FC, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

import { PATHS } from 'constants/routes';
import Loader from 'components/Loader';
import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';

const AnonymousRoute: FC = ({ children }) => {
  const accessToken = getAuthResponseData();

  return accessToken ? (
    <Navigate to={PATHS.profile} />
  ) : (
    <Suspense fallback={<Loader />}>{children}</Suspense>
  );
};

export default AnonymousRoute;
