import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';

import theme from 'themeSettings';

export const Wrapper = styled(Box)({
  margin: '0px !important',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: '0px !important',
    justifyContent: 'center',
    maxWidth: '100%',
  },
});

export const LogoBox = styled(Box)({
  display: 'flex',
  width: '100%',
  paddingLeft: '0px',
  justifyContent: 'center',
  paddingTop: '8px',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export const CompanyLogo = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif !important',
  marginLeft: '10px !important',
  fontSize: '42px !important',
  fontWeight: '600 !important',
  textAlign: 'center',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '10px !important',
    fontSize: '34px !important',
    fontWeight: '700 !important',
  },
  [theme.breakpoints.down('lg')]: {
    marginLeft: '0px !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '35px !important',
  },
});

export const Instructions = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif !important',
  fontSize: '48px !important',
  paddingTop: '8px',
  fontWeight: '600 !important',
  textAlign: 'center',
  [theme.breakpoints.down('xl')]: {
    fontSize: '38px !important',
    fontWeight: '700 !important',
    textAlign: 'center',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px !important',
  },
  '& span': {
    color: theme.palette.primary.main,
  },
});
