import styled from 'styled-components';
import Avatar from 'react-avatar';

import { SIZE } from 'constants/sizes';
import theme from 'themeSettings';

interface Size {
  size?: string;
}

export const UserAvatarRounded = styled(Avatar)<Size>(({ size }) => ({
  display: 'inline-block',
  margin: '1% auto',
  width: '100px',
  height: '100px',
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
