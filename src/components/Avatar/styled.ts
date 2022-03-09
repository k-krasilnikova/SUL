import styled from 'styled-components';

import { SIZE } from 'constants/sizes';
import theme from 'themeSettings';

interface Size {
  avatar: string;
  size?: string;
}

export const UserAvatarRounded = styled('div')<Size>(({ size, avatar }) => ({
  display: 'inline-block',
  margin: '1% auto',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  background: `no-repeat center url(${avatar})`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('xs')]: {
    ...(size === SIZE.large && {
      width: '80px',
      height: '80px',
    }),
    ...(size === SIZE.medium && {
      width: '60px',
      height: '60px',
    }),
    ...(size === SIZE.small && {
      width: '30px',
      height: '30px',
    }),
  },
  [theme.breakpoints.up('md')]: {
    ...(size === SIZE.small && {
      width: '40px',
      height: '40px',
    }),
  },
  [theme.breakpoints.up('lg')]: {
    ...(size === SIZE.large && {
      width: '132px',
      height: '132px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    ...(size === SIZE.large && {
      width: '220px',
      height: '220px',
    }),
    ...(size === SIZE.medium && {
      width: '100px',
      height: '100px',
    }),
    ...(size === SIZE.small && {
      width: '50px',
      height: '50px',
    }),
  },
}));
