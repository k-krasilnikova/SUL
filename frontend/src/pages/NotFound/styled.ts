import { styled, Box, Grid, Typography } from '@mui/material';

import theme from 'themeSettings';

export const NotFoundWrapper = styled(Grid)({
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const DefaultWrapper = styled(Box)({
  height: '100vh',
});

export const ErrorText = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'bold',
  color: '#8b8b8b',
  margin: '0.5em auto',
  letterSpacing: '-0.4px! important',
  lineHeight: '83.88px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '30px',
    lineHeight: '30px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
    lineHeight: '50px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '73px',
    lineHeight: '69px',
  },
});

export const StyledText = styled('span')({
  color: '#D43E41',
});

export const UnderErrorText = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'medium',
  color: '#8b8b8b',
  lineHeight: '68.94px',
  letterSpacing: '-0.4px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '20px',
    lineHeight: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '40px',
    lineHeight: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '60px',
    lineHeight: '60px',
  },
});
