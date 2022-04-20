import { styled, Box, Typography } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const TestResultBox = styled(Box)({
  margin: '64px 332px 0 120px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    margin: '48px 7vw 0 48px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '32px 20px 0 16px',
  },
});

export const TitleBox = styled(Box)({
  [theme.breakpoints.down('xl')]: {
    marginRight: '39px',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '16px',
  },
});

export const TestResultTitle = styled(Typography)({
  fontWeight: 500,
  fontSize: '32px',
  color: '#131313',
  lineHeight: '38px',
  letterSpacing: 0,
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '24px',
  },
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '5vh',
  [theme.breakpoints.down('xl')]: {
    marginRight: '9vw',
  },
});

export const SubmitButton = styled(Button)({
  height: '50px',
  width: '103px',
  fontSize: '18px',
  padding: '14px 23px',
  [theme.breakpoints.down('sm')]: {
    height: '26px',
    width: '56px',
    fontSize: '14px',
    fontWeight: 500,
  },
});

export const ContentBox = styled(Box)({
  display: 'flex',
  marginTop: '48px',
  marginBottom: '220px',
  [theme.breakpoints.down('xl')]: {
    marginTop: '66px',
    marginBottom: '112px',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    marginTop: '32px',
    marginBottom: '32px',
  },
});
