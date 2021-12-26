import React from 'react';
import { Box } from '@mui/material';

import { authGreetings, techLogIn, techArtLabel } from './SignReceiver';
import { SignPresenterBox, PresenterWrapper, SignTechArtLabel, SignPresentSubtext } from './styled';

const SignPresenter = (): JSX.Element => (
  <SignPresenterBox>
    <PresenterWrapper>
      <SignTechArtLabel>
        {techArtLabel} {techLogIn}
      </SignTechArtLabel>
    </PresenterWrapper>
    <Box sx={{ mt: 2 }}>
      <SignPresentSubtext>{authGreetings}</SignPresentSubtext>
    </Box>
  </SignPresenterBox>
);

export default SignPresenter;
