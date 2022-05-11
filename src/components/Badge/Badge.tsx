import { FC } from 'react';
import { Badge as MuiBadge } from '@mui/material';
import { Mail } from '@mui/icons-material';

import { IBadgeProps } from './types';

const Badge: FC<IBadgeProps> = ({ badgeContent }) => (
  <MuiBadge badgeContent={badgeContent} color="primary">
    <Mail color="action" />
  </MuiBadge>
);

export default Badge;
