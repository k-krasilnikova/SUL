import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';

import theme from 'themeSettings';

export const TitleBox = styled(Box)({
  display: 'flex',
  marginLeft: '40px',
  flexDirection: 'row',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '24px',
  },
  [theme.breakpoints.down('lg')]: {
    marginLeft: '18px',
  },
  [theme.breakpoints.down(880)]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '12px',
  },
});

export const CourseTestTitle = styled(Typography)({
  fontWeight: '700',
  fontSize: '36px',
  color: '#2c2525',
  [theme.breakpoints.down('xl')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '26px',
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: '500',
    fontSize: '20px',
  },
});

export const CountDownText = styled(Typography)({
  marginLeft: '48px',
  fontWeight: '500',
  fontSize: '22px',
  color: '#131313',
  display: 'flex',
  alignSelf: 'center',
  [theme.breakpoints.down('xl')]: {
    fontWeight: '500',
    fontSize: '20px',
    alignSelf: 'flex-end',
    paddingBottom: '3px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down(880)]: {
    alignSelf: 'flex-start',
    marginLeft: '0',
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: '400',
    fontSize: '14px',
  },
});
