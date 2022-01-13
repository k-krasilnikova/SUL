import React from 'react';

import { AuthorizedLayout } from 'components/Layout';

import { ErrorText, NotFoundWrapper, StyledText, UnderErrorText } from './styled';

const NotFound: React.FC = () => (
  <AuthorizedLayout pageName="Not Found">
    <NotFoundWrapper>
      <ErrorText>
        <StyledText>404 </StyledText>
        Error
      </ErrorText>
      <UnderErrorText>Page not found</UnderErrorText>
    </NotFoundWrapper>
  </AuthorizedLayout>
);

export default NotFound;
