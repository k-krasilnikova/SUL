import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';

import theme from 'themeSettings';

export const Wrapper = styled(Box)({
  margin: '0px !important',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  '@media(max-width: 767px)': {
    width: '100%',
    margin: '0px !important',
    justifyContent: 'center',
    marginTop: '20px',
    maxWidth: '100%',
  },
});

export const LogoBox = styled(Box)({
  display: 'flex',
  width: '100%',
  paddingLeft: '0px',
  justifyContent: 'center',
  '@media(max-width: 767px)': {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
});

export const CompanyLogo = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif !important',
  fontSize: '42px !important',
  letterSpacing: 0.5,
  fontWeight: '600 !important',
  textAlign: 'center',
  '@media(max-width: 424px)': {
    fontSize: '35px !important',
  },
  '& span': {
    color: theme.palette.primary.main,
  },
});

export const Instructions = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif !important',
  fontSize: '48px !important',
  letterSpacing: 0.5,
  fontWeight: '600 !important',
  textAlign: 'center',
  '@media(max-width: 767px)': {
    textAlign: 'center',
  },
  '@media(max-width: 424px)': {
    fontSize: '20px !important',
  },
  '& span': {
    color: theme.palette.primary.main,
  },
});
