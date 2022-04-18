import styled from 'styled-components';
import Box from '@mui/material/Box';

import { ESize } from 'enums/sizes';
import theme from 'themeSettings';
import { TSizeVariants } from 'types/size';

interface Size {
  size?: TSizeVariants;
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
    ...(size === ESize.large && {
      fontSize: '30px',
      lineHeight: '30px',
    }),
    ...(size === ESize.medium && {
      fontSize: '20px',
      lineHeight: '20px',
    }),
    ...(size === ESize.small && {
      fontSize: '12px',
      lineHeight: '12px',
    }),
  },
  [theme.breakpoints.up('lg')]: {
    fontFamily: 'Ubuntu',
    fontSize: '60px',
    fontWeight: '700',
    lineHeight: '69px',
    ...(size === ESize.large && {
      fontSize: '50px',
      lineHeight: '50px',
    }),
    ...(size === ESize.medium && {
      fontSize: '30px',
      lineHeight: '30px',
    }),
    ...(size === ESize.small && {
      fontSize: '16px',
      lineHeight: '16px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '73px',
    lineHeight: '73px',
    ...(size === ESize.large && {
      fontSize: '73px',
      lineHeight: '73px',
    }),
    ...(size === ESize.medium && {
      fontSize: '40px',
      lineHeight: '40px',
    }),
    ...(size === ESize.small && {
      fontSize: '30px',
      lineHeight: '30px',
    }),
  },
}));
