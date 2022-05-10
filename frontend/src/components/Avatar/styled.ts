import { styled } from '@mui/material';

import { Size } from 'enums/sizes';
import theme from 'themeSettings';
import { TSizeVariants } from 'types/size';

interface IProps {
  avatar: string;
  size?: TSizeVariants;
}

export const UserAvatarRounded = styled('div')<IProps>(({ size, avatar }) => ({
  display: 'inline-block',
  margin: '1% auto',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  background: `no-repeat center url(${avatar})`,
  backgroundSize: 'cover',
  [theme.breakpoints.down('xl')]: {
    ...((size === Size.xlarge || size === Size.sublarge) && {
      width: '220px',
      height: '220px',
    }),
    ...(size === Size.large && {
      width: '150px',
      height: '150px',
    }),
    ...(size === Size.medium && {
      width: '100px',
      height: '100px',
    }),
    ...(size === Size.submedium && {
      width: '80px',
      height: '80px',
    }),
    ...(size === Size.subsmall && {
      width: '60px',
      height: '60px',
    }),
    ...(size === Size.small && {
      width: '50px',
      height: '50px',
    }),
    ...(size === Size.xsmall && {
      width: '30px',
      height: '30px',
    }),
    ...(size === Size.xxsmall && {
      width: '25px',
      height: '25px',
    }),
  },
  [theme.breakpoints.down('lg')]: {
    ...((size === Size.xlarge || size === Size.sublarge) && {
      width: '150px',
      height: '150px',
    }),
    ...(size === Size.large && {
      width: '130px',
      height: '130px',
    }),
    ...(size === Size.submedium && {
      width: '70px',
      height: '70px',
    }),
    ...(size === Size.medium && {
      width: '60px',
      height: '60px',
    }),
    ...(size === Size.small && {
      width: '50px',
      height: '50px',
    }),
    ...(size === Size.xsmall && {
      width: '40px',
      height: '40px',
    }),
    ...(size === Size.xxsmall && {
      width: '25px',
      height: '25px',
    }),
  },
  [theme.breakpoints.down('md')]: {
    ...((size === Size.xlarge || size === Size.sublarge || size === Size.large) && {
      width: '130px',
      height: '130px',
    }),
    ...(size === Size.small && {
      width: '30px',
      height: '30px',
    }),
    ...(size === Size.xxsmall && {
      width: '25px',
      height: '25px',
    }),
  },
  [theme.breakpoints.down(550)]: {
    ...(size === Size.sublarge && {
      width: '60px',
      height: '60px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    ...((size === Size.xlarge || size === Size.large || size === Size.sublarge) && {
      width: '220px',
      height: '220px',
    }),
    ...(size === Size.medium && {
      width: '150px',
      height: '150px',
    }),
    ...(size === Size.submedium && {
      width: '80px',
      height: '80px',
    }),
    ...(size === Size.subsmall && {
      width: '60px',
      height: '60px',
    }),
    ...((size === Size.xsmall || size === Size.small) && {
      width: '50px',
      height: '50px',
    }),
    ...(size === Size.xxsmall && {
      width: '25px',
      height: '25px',
    }),
  },
}));
