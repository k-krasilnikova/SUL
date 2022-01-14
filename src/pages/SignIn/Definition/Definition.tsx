import React from 'react';
import { Box } from '@mui/material';

import { Wrapper, LogoBox, CompanyLogo, Instructions } from './styled';

const Definition = (): JSX.Element => (
  <Wrapper>
    <LogoBox>
      <CompanyLogo>
        <span>:i</span>Tech<span>Art</span>
      </CompanyLogo>
    </LogoBox>
    <LogoBox sx={{ mt: 2 }}>
      <Instructions>
        Skill<span>Up</span> Level
      </Instructions>
    </LogoBox>
  </Wrapper>
);

export default Definition;
