import React from 'react';

import { AuthorizedLayout } from 'components/Layout';

import { RequestsWrapper } from './styled';

const Requests: React.FC = () => (
  <AuthorizedLayout pageName="Requests">
    <RequestsWrapper>Requests should be here</RequestsWrapper>
  </AuthorizedLayout>
);

export default Requests;
