import React from 'react';

import { Wrapper, LogoBox, CompanyLogo, Instructions } from './styled';

const Definition: React.FC = () => (
  <Wrapper>
    <LogoBox>
      <CompanyLogo>:iTechArt</CompanyLogo>
    </LogoBox>
    <LogoBox>
      <Instructions>
        Skill<span>Up</span> Level
      </Instructions>
    </LogoBox>
  </Wrapper>
);

export default Definition;
