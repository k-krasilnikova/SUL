import { styled, Box, Typography } from '@mui/material';

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
  [theme.breakpoints.down('xl')]: {
    paddingTop: '0px',
  },
});

export const CompanyLogo = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif !important',
  marginLeft: '15px !important',
  fontSize: '42px !important',
  fontWeight: '600 !important',
  textAlign: 'center',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '0px !important',
    fontSize: '34px !important',
    fontWeight: '700 !important',
  },
  [theme.breakpoints.down('lg')]: {
    paddingTop: '5px',
    marginLeft: '0px !important',
    fontSize: '30px !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px !important',
    lineHeight: '27.58px !important',
    fontWeight: '700 !important',
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
    paddingTop: '25px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '34px !important',
    fontWeight: '700 !important',
    textAlign: 'center',
    paddingTop: '5px',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    paddingTop: '5px',
    fontSize: '35px !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px !important',
    fontWeight: '700 !important',
    lineHeight: '32px !important',
    paddingTop: '12px',
  },
  '& span': {
    color: theme.palette.primary.main,
  },
});
