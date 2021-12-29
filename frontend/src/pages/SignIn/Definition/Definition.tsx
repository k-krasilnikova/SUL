import React from 'react';
import { Box } from '@mui/material';

import { Wrapper, LogoBox, CompanyLogo, Instructions } from './styled';

const Definition = (): JSX.Element => (
  <Wrapper>
    <LogoBox>
      <CompanyLogo>:iTechArt LogIn</CompanyLogo>
    </LogoBox>
    <Box sx={{ mt: 2 }}>
      <Instructions>
        Log in with your corporate account to access internal applications and services
      </Instructions>
    </Box>
  </Wrapper>
);

export default Definition;
