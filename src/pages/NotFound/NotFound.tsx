import { Grid } from '@mui/material';
import React from 'react';

import PageTitle from 'components/PageTitle';

import { ErrorText, NotFoundWrapper, StyledText, UnderErrorText } from './styled';

const NotFound: React.FC = () => (
  <PageTitle title="Not found">
    <NotFoundWrapper container>
      <Grid item>
        <ErrorText align="center">
          <StyledText>404 </StyledText>
          Error
        </ErrorText>
        <UnderErrorText>Page not found</UnderErrorText>
      </Grid>
    </NotFoundWrapper>
  </PageTitle>
);

export default NotFound;
