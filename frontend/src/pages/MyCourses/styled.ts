import styled from 'styled-components';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const GridItem = styled(Grid)({
  height: 'fit-content',
  maxWidth: '741px !important',
  width: '741px !important',
  paddingLeft: '30px !important',
  paddingTop: '24px !important',
  [theme.breakpoints.down('xl')]: {
    width: '100% !important',
    maxWidth: '100% !important',
    paddingTop: '8px !important',
    paddingLeft: '0px !important',
  },
});

export const CourseActions = styled('div')({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px',
    minWidth: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 'auto',
  },
});

export const CourseActionsBox = styled(Box)({
  marginLeft: '16px !important',
});

export const DetailsButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '16px !important',
  fontSize: '16px!important',
  lineHeight: '22px',
  padding: '12px 12px!important',
  [theme.breakpoints.down('md')]: {
    height: '44px',
    width: '131px',
    marginRight: '9px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 10px!important',
  },
});

export const StartCourseButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '40px !important',
  fontSize: '16px!important',
  lineHeight: '22px',
  padding: '12px 12px!important',
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    width: '131px',
    marginRight: '26px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 10px!important',
  },
});

export const MobileLink = styled(Link)({
  '&:hover': {
    cursor: 'default',
  },
  [theme.breakpoints.down('xl')]: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export const ContinueTestButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '40px !important',
  fontSize: '16px!important',
  lineHeight: '22px',
  padding: '12px 12px!important',
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    width: '131px',
    marginRight: '26px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 10px!important',
  },
});

export const MobileSearchWrapper = styled('div')({
  width: '100%',
  margin: '16px 0px 8px 0px',
  height: '30px',
  '@media(min-width: 1110px)': {
    display: 'none',
  },
});
