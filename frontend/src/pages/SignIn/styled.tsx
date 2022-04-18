import { styled, Grid, Box } from '@mui/material';

import theme from 'themeSettings';

export const SignMain = styled(Box)({
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0',
  background: theme.palette.secondary.main,
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    margin: '0 auto',
  },
});

export const SignInWrapper = styled(Grid)({
  height: '100% !important',
  minHeight: '100vh',
  width: '85% !important',
  margin: '0 auto !important',
  padding: '0px !important',
  '@media(max-width: 1280px)': {
    width: '90% !important',
    justifyContent: 'center !important',
  },
  [theme.breakpoints.down('md')]: {
    width: '95% !important',
    justifyContent: 'center !important',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    justifyContent: 'center !important',
  },
  '@media(max-width: 1066px)': {
    width: '95% !important',
  },
  [theme.breakpoints.down('lg')]: {
    width: '85% !important',
    justifyContent: 'center !important',
  },
});

export const SignPresGrid = styled(Grid)({
  padding: '0px 5px!important',
  margin: '0px !important',
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
    marginLeft: '0px',
    marginRight: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    marginBottom: '0px !important',
    marginLeft: '0px !important',
    marginRight: '0px !important',
  },
});
