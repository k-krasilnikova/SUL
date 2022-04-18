import { styled, Box, Typography } from '@mui/material';

import theme from 'themeSettings';

export const Wrapper = styled(Box)({
  margin: 0,
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    margin: 0,
    justifyContent: 'center',
    maxWidth: '100%',
  },
});

export const LogoBox = styled(Box)({
  display: 'flex',
  width: '100%',
  paddingLeft: 0,
  justifyContent: 'center',
  paddingTop: '8px',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('xl')]: {
    paddingTop: 0,
  },
});

export const CompanyLogo = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif ',
  marginLeft: '15px',
  fontSize: '42px',
  fontWeight: '600 ',
  textAlign: 'center',
  [theme.breakpoints.down('xl')]: {
    marginLeft: 0,
    fontSize: '34px',
    fontWeight: '700 ',
  },
  [theme.breakpoints.down('lg')]: {
    paddingTop: '5px',
    marginLeft: 0,
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '27.58px',
    fontWeight: '700 ',
  },
});

export const Instructions = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif ',
  fontSize: '48px',
  paddingTop: '8px',
  fontWeight: '600 ',
  textAlign: 'center',
  [theme.breakpoints.down('xl')]: {
    fontSize: '38px',
    fontWeight: '700 ',
    textAlign: 'center',
    paddingTop: '25px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '34px',
    fontWeight: '700 ',
    textAlign: 'center',
    paddingTop: '5px',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    paddingTop: '5px',
    fontSize: '35px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
    fontWeight: '700 ',
    lineHeight: '32px',
    paddingTop: '12px',
  },
  '& span': {
    color: theme.palette.primary.main,
  },
});
