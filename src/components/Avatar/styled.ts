import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

import { SIZE } from 'constants/sizes';

interface Size {
  size?: string;
}

export const UserAvatarRounded = styled(Avatar)<Size>(({ size }) => ({
  display: 'inline-block',
  margin: '1% auto',
  width: '100px',
  height: '100px',
  ...(size === SIZE.large && {
    width: '220px',
    height: '220px',
  }),
  ...(size === SIZE.medium && {
    width: '100px',
    height: '100px',
  }),
  ...(size === SIZE.small && {
    width: '40px',
    height: '40px',
  }),
}));
