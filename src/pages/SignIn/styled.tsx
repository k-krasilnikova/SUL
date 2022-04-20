import { styled, Grid, Box } from '@mui/material';

import theme from 'themeSettings';

export const SignMain = styled(Box)({
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 0,
  background: theme.palette.secondary.main,
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    margin: '0 auto',
  },
});

export const SignInWrapper = styled(Grid)({
  height: '100%',
  minHeight: '100vh',
  width: '85%',
  margin: '0 auto',
  padding: 0,
  '@media(max-width: 1280px)': {
    width: '90%',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('md')]: {
    width: '95%',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'center',
  },
  '@media(max-width: 1066px)': {
    width: '95%',
  },
  [theme.breakpoints.down('lg')]: {
    width: '85%',
    justifyContent: 'center',
  },
});

export const SignPresGrid = styled(Grid)({
  padding: '0 5px',
  margin: 0,
  display: 'grid',
  [theme.breakpoints.down('md')]: {
    display: 'none',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const ImageWrapper = styled(Box)({
  width: '100%',
  maxWidth: '716px',
  justifySelf: 'center',
  alignSelf: 'center',
  marginBottom: '20px',
  marginLeft: '10px',
  '@media(max-width: 1280px)': {
    maxWidth: '455px',
    marginBottom: '55px',
    marginLeft: 0,
    marginRight: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
});
