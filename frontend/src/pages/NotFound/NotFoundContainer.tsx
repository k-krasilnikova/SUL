import React from 'react';

import { AuthorizedLayout, DefaultLayout } from 'components/Layout';
import { getAuthResponseData, TokenTypes } from 'utils/helpers/getAuthResponseData';

import NotFound from './NotFound';
import { DefaultWrapper } from './styled';

const NotFoundContainer: React.FC = () => {
  const accessToken = getAuthResponseData(TokenTypes.accessToken);

  return accessToken ? (
    <AuthorizedLayout pageName="Not found">
      <NotFound />
    </AuthorizedLayout>
  ) : (
    <DefaultLayout pageName="Not found">
      <DefaultWrapper>
        <NotFound />
      </DefaultWrapper>
    </DefaultLayout>
  );
};

export default NotFoundContainer;
