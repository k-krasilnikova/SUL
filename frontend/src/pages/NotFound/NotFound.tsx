import { Grid } from '@mui/material';
import React from 'react';

import { ErrorText, NotFoundWrapper, StyledText, UnderErrorText } from './styled';

const NotFound: React.FC = () => (
  <NotFoundWrapper container>
    <Grid item>
      <ErrorText align="center">
        <StyledText>404 </StyledText>
        Error
      </ErrorText>
      <UnderErrorText>Page not found</UnderErrorText>
    </Grid>
  </NotFoundWrapper>
);

export default NotFound;
