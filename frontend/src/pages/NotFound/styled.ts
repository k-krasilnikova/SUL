import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

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
  fontWeight: 'bold !important',
  color: '#8b8b8b',
  margin: '0.5em auto !important',
  letterSpacing: '-0.4px! important',
  lineHeight: '83.88px !important',
  [theme.breakpoints.up('xs')]: {
    fontSize: '30px !important',
    lineHeight: '30px !important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px !important',
    lineHeight: '50px !important',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '73px !important',
    lineHeight: '69px !important',
  },
});

export const StyledText = styled('span')({
  color: '#D43E41',
});

export const UnderErrorText = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'medium',
  color: '#8b8b8b',
  lineHeight: '68.94px !important',
  letterSpacing: '-0.4px !important',
  [theme.breakpoints.up('xs')]: {
    fontSize: '20px !important',
    lineHeight: '20px !important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '40px !important',
    lineHeight: '40px !important',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '60px !important',
    lineHeight: '60pxpx !important',
  },
});
