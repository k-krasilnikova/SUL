import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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
});
export const Message = styled(Typography)<Size>(({ size }) => ({
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'bold',
  color: '#8b8b8b',
  margin: 'auto',
  [theme.breakpoints.up('xs')]: {
    fontSize: '30px',
    lineHeight: '30px',
    ...(size === SIZE.large && {
      fontSize: '40px',
      lineHeight: '40px',
    }),
    ...(size === SIZE.medium && {
      fontSize: '30px',
      lineHeight: '30px',
    }),
    ...(size === SIZE.small && {
      fontSize: '20px',
      lineHeight: '20px',
    }),
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
    lineHeight: '50px',
  },
  [theme.breakpoints.up('lg')]: {
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
