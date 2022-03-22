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
  [theme.breakpoints.down('xl')]: {
    ...(size === SIZE.large && {
      width: '150px',
      height: '150px',
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
  [theme.breakpoints.down('lg')]: {
    ...(size === SIZE.small && {
      width: '40px',
      height: '40px',
    }),
    ...(size === SIZE.large && {
      width: '130px',
      height: '130px',
    }),
  },
  [theme.breakpoints.down('md')]: {
    ...(size === SIZE.large && {
      width: '130px',
      height: '130px',
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
  [theme.breakpoints.up('xl')]: {
    ...(size === SIZE.large && {
      width: '220px',
      height: '220px',
    }),
    ...(size === SIZE.medium && {
      width: '150px',
      height: '150px',
    }),
    ...(size === SIZE.small && {
      width: '50px',
      height: '50px',
    }),
  },
}));
