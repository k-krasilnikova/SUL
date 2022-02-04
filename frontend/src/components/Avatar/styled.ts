import styled from 'styled-components';
import Avatar from 'react-avatar';

import { SIZE } from 'constants/sizes';
import theme from 'themeSettings';

interface Size {
  avatarSize?: string;
}

export const UserAvatarRounded = styled(Avatar)<Size>(({ avatarSize }) => ({
  display: 'inline-block',
  margin: '1% auto',
  width: '100px',
  height: '100px',
  [theme.breakpoints.up('xs')]: {
    ...(avatarSize === SIZE.large && {
      width: '120px',
      height: '120px',
    }),
    ...(avatarSize === SIZE.medium && {
      width: '80px',
      height: '80px',
    }),
    ...(avatarSize === SIZE.small && {
      width: '40px',
      height: '40px',
    }),
  },
  [theme.breakpoints.up('lg')]: {
    ...(avatarSize === SIZE.large && {
      width: '220px',
      height: '220px',
    }),
    ...(avatarSize === SIZE.medium && {
      width: '100px',
      height: '100px',
    }),
    ...(avatarSize === SIZE.small && {
      width: '50px',
      height: '50px',
    }),
  },
}));
