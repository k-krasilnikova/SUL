import styled from 'styled-components';
import { Box } from '@mui/system';

import theme from 'themeSettings';

export const DetailedCourseWrapper = styled(Box)({
  [theme.breakpoints.up('md')]: {
    margin: '25px 0 25px 21px',
    width: 'calc(100% - 21px)',
  },
  [theme.breakpoints.up('xl')]: {
    margin: '40px 0 40px 40px',
    width: 'calc(100% - 40px)',
  },
});

export const InnerWrapper = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    margin: '8px',
    maxWidth: '98%',
  },
  [theme.breakpoints.up('md')]: {
    margin: '14px 30px 0px 27px',
    maxWidth: '847px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '29px 40px 0px 27px',
    maxWidth: 'calc(100% - 54px)',
  },
  [theme.breakpoints.up('xl')]: {
    margin: '2%',
    maxWidth: '85%',
  },
});

export const MobileSearchWrapper = styled('div')({
  width: 'calc(100% - 56px)',
  margin: '16px 0px 8px 0px',
  height: '30px',
  display: 'inline-block',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    margin: '0px 0px 0px 6px',
    width: 'calc(100% - 80px)',
  },
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
});
