import { styled, Box } from '@mui/material';

import theme from 'themeSettings';

export const DetailedCourseWrapper = styled(Box)({
  margin: '40px 0 40px 40px',
  width: 'calc(100% - 40px)',
  [theme.breakpoints.down('md')]: {
    margin: '25px 0 25px 21px',
    width: 'calc(100% - 21px)',
  },
});

export const InnerWrapper = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    margin: '8px',
    maxWidth: '98%',
  },
  [theme.breakpoints.up('md')]: {
    margin: '14px 30px 0 27px',
    maxWidth: '847px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '29px 40px 0 27px',
    maxWidth: 'calc(100% - 54px)',
  },
  [theme.breakpoints.up('xl')]: {
    margin: '2%',
    maxWidth: '85%',
  },
});

export const MobileSearchWrapper = styled('div')({
  width: 'calc(100% - 56px)',
  margin: '16px 0 8px 0',
  height: '30px',
  display: 'inline-block',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    margin: '0 0 0 6px',
    width: 'calc(100% - 80px)',
  },
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
});

export const ButtonsWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '13%',
  [theme.breakpoints.down('xl')]: {
    marginRight: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    marginRight: '30px',
  },
  [theme.breakpoints.down('md')]: {
    marginRight: '8px',
    marginLeft: '-25px',
    marginTop: '-10px',
  },
});
