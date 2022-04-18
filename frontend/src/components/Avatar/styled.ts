import styled from 'styled-components';

import { ESize } from 'enums/sizes';
import theme from 'themeSettings';
import { TSizeVariants } from 'types/size';

interface Size {
  avatar: string;
  size?: TSizeVariants;
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
    ...(size === ESize.xlarge && {
      width: '220px',
      height: '220px',
    }),
    ...(size === ESize.large && {
      width: '150px',
      height: '150px',
    }),
    ...(size === ESize.medium && {
      width: '100px',
      height: '100px',
    }),
    ...(size === ESize.small && {
      width: '50px',
      height: '50px',
    }),
    ...(size === ESize.xsmall && {
      width: '30px',
      height: '30px',
    }),
  },
  [theme.breakpoints.down('lg')]: {
    ...(size === ESize.xlarge && {
      width: '150px',
      height: '150px',
    }),
    ...(size === ESize.xsmall && {
      width: '40px',
      height: '40px',
    }),
    ...(size === ESize.medium && {
      width: '60px',
      height: '60px',
    }),
    ...(size === ESize.large && {
      width: '130px',
      height: '130px',
    }),
    ...(size === ESize.small && {
      width: '50px',
      height: '50px',
    }),
  },
  [theme.breakpoints.down('md')]: {
    ...(size === ESize.xlarge && {
      width: '130px',
      height: '130px',
    }),
    ...(size === ESize.large && {
      width: '130px',
      height: '130px',
    }),
    ...(size === ESize.small && {
      width: '30px',
      height: '30px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    ...(size === ESize.xlarge && {
      width: '220px',
      height: '220px',
    }),
    ...(size === ESize.large && {
      width: '220px',
      height: '220px',
    }),
    ...(size === ESize.medium && {
      width: '150px',
      height: '150px',
    }),
    ...(size === ESize.xsmall && {
      width: '50px',
      height: '50px',
    }),
    ...(size === ESize.small && {
      width: '50px',
      height: '50px',
    }),
  },
}));
