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
      width: '130px',
      height: '130px',
    }),
    ...(size === SIZE.medium && {
      width: '60px',
      height: '60px',
    }),
    ...(size === SIZE.xsmall && {
      width: '30px',
      height: '30px',
    }),
    ...(size === SIZE.small && {
      width: '44px',
      height: '44px',
    }),
  },
  [theme.breakpoints.up('md')]: {
    ...(size === SIZE.xsmall && {
      width: '40px',
      height: '40px',
    }),
    ...(size === SIZE.large && {
      width: '130px',
      height: '130px',
    }),
    ...(size === SIZE.small && {
      width: '50px',
      height: '50px',
    }),
  },
  [theme.breakpoints.up('lg')]: {
    ...(size === SIZE.large && {
      width: '150px',
      height: '150px',
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
    ...(size === SIZE.xsmall && {
      width: '50px',
      height: '50px',
    }),
  },
}));
