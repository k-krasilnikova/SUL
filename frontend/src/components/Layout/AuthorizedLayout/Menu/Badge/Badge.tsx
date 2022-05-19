import { FC } from 'react';

import { IBadgeProps } from './types';
import { StyledBadge } from './styled';

const Badge: FC<IBadgeProps> = ({ badgeContent }) => (
  <StyledBadge badgeContent={badgeContent} color="primary" />
);

export default Badge;
