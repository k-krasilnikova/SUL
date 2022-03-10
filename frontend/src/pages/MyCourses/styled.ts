import styled from 'styled-components';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const PageContainer = styled(Grid)({
  [theme.breakpoints.up('xs')]: {
    padding: '0px 8px !important',
  },
  '@media(max-width: 1110px)': {
    paddingTop: '40px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 8px 0 8px !important',
  },
  '@media(min-width: 1110px)': {
    padding: '16px 30px 0px 30px !important',
  },
  '@media(min-width: 1440px)': {
    padding: '16px 30px 0px 0px !important',
  },
  width: '100%',
  paddingRight: '30px !important',
  paddingTop: '1.0% !important',
  paddingLeft: '0px !important',
});

export const GridItem = styled(Grid)({
  height: 'fit-content',
  width: '711px !important',
  paddingLeft: '30px',
  paddingTop: '24px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    paddingLeft: '0px',
    paddingTop: '8px',
  },
});

export const CourseButton = styled(Button)({
  [theme.breakpoints.up('xs')]: {
    margin: '3px',
    fontSize: '10px',
    alignSelf: 'center',
    height: '40px',
    width: '120px',
    lineHeight: '10px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '140px',
    marginLeft: '5px',
    height: '40px',
    fontSize: '10px',
    alignSelf: 'center',
    lineHeight: '10px',
  },
  marginRight: '20px',
});

export const CourseActions = styled('div')({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
    margin: '0px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    minWidth: 'auto',
  },
});

export const CourseActionsBox = styled(Box)({
  marginLeft: '16px !important',
});

export const DetailsButton = styled(Button)({
  [theme.breakpoints.up('sm')]: {
    height: '44px',
    width: '131px',
    marginRight: '9px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 10px!important',
  },
  [theme.breakpoints.up('xl')]: {
    height: '50px',
    width: '150px',
    marginRight: '16px !important',
    fontSize: '16px!important',
    lineHeight: '22px',
    padding: '12px 12px!important',
  },
});

export const StartCourseButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '40px !important',
  fontSize: '16px!important',
  lineHeight: '22px',
  padding: '12px 12px!important',
  [theme.breakpoints.down('lg')]: {
    height: '44px !important',
    width: '131px !important',
    marginRight: '26px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 10px!important',
  },
});

export const MobileLink = styled(Link)({
  [theme.breakpoints.up('xs')]: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  [theme.breakpoints.up('sm')]: {
    '&:hover': {
      cursor: 'default',
    },
  },
});

export const ContinueTestButton = styled(Button)({
  [theme.breakpoints.up('sm')]: {
    height: '44px',
    width: '131px',
    marginRight: '26px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 10px!important',
  },
  [theme.breakpoints.up('xl')]: {
    height: '50px',
    width: '150px',
    marginRight: '40px !important',
    fontSize: '16px!important',
    lineHeight: '22px',
    padding: '12px 0px!important',
  },
});
export const MobileSearchWrapper = styled('div')({
  width: '100%',
  margin: '16px 0px 8px 0px',
  height: '30px',
  position: 'relative',
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
});

export const CompletedButton = styled(Button)({
  height: '50px',
  width: '150px',
  fontSize: '16px!important',
  lineHeight: '22px',
  padding: '12px 12px!important',
  justifySelf: 'flex-start',
  alignSelf: 'center',
  display: 'flex',
  marginRight: '40px !important',
  [theme.breakpoints.down('xl')]: {
    marginRight: '26px !important',
    height: '44px',
    width: '121px',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 0px !important',
  },
});
