import { FC } from 'react';

import { IMobileLinkProps } from './types';
import { StyledLink } from './styled';

const MobileLink: FC<IMobileLinkProps> = ({ children, handleLinkClick, ...props }) => (
  <StyledLink onClick={handleLinkClick} {...props}>
    {children}
  </StyledLink>
);

export default MobileLink;
