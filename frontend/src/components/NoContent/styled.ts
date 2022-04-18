import { styled, Box } from '@mui/material';

import { SIZE } from 'constants/sizes';
import theme from 'themeSettings';

interface Size {
  size?: string;
}

export const MessageWrapper = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
});

export const Message = styled('span')<Size>(({ size }) => ({
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'bold',
  color: '#8b8b8b',
  margin: 'auto',
  [theme.breakpoints.up('xs')]: {
    fontFamily: 'Ubuntu',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '41px',
    ...(size === SIZE.large && {
      fontSize: '30px',
      lineHeight: '30px',
    }),
    ...(size === SIZE.medium && {
      fontSize: '20px',
      lineHeight: '20px',
    }),
    ...(size === SIZE.small && {
      fontSize: '12px',
      lineHeight: '12px',
    }),
  },
  [theme.breakpoints.up('lg')]: {
    fontFamily: 'Ubuntu',
    fontSize: '60px',
    fontWeight: '700',
    lineHeight: '69px',
    ...(size === SIZE.large && {
      fontSize: '50px',
      lineHeight: '50px',
    }),
    ...(size === SIZE.medium && {
      fontSize: '30px',
      lineHeight: '30px',
    }),
    ...(size === SIZE.small && {
      fontSize: '16px',
      lineHeight: '16px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '73px',
    lineHeight: '73px',
    ...(size === SIZE.large && {
      fontSize: '73px',
      lineHeight: '73px',
    }),
    ...(size === SIZE.medium && {
      fontSize: '40px',
      lineHeight: '40px',
    }),
    ...(size === SIZE.small && {
      fontSize: '30px',
      lineHeight: '30px',
    }),
  },
}));
