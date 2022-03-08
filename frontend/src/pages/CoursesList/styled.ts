import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const GridItem = styled(Grid)({
  height: 'fit-content',
  maxWidth: '741px !important',
  width: '741px !important',
  paddingLeft: '30px !important',
  paddingTop: '24px !important',
  [theme.breakpoints.down('xl')]: {
    width: '50% !important',
    maxWidth: '50% !important',
    paddingTop: '10px !important',
    paddingLeft: '20px !important',
  },
  [theme.breakpoints.down('lg')]: {
    width: '100% !important',
    maxWidth: '100% !important',
    paddingTop: '8px !important',
    paddingLeft: '0px !important',
  },
  '@media(min-width: 1920px)': {
    width: '30% !important',
    maxWidth: '33.33% !important',
    paddingLeft: '20px !important',
    paddingTop: '10px !important',
  },
});

export const CourseActions = styled('div')({
  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
    margin: '0px',
    minWidth: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    minWidth: 'auto',
  },
  display: 'flex',
});

export const CourseActionsBox = styled(Box)({
  marginLeft: '16px !important',
  display: 'flex',
  flexWrap: 'nowrap',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '16px !important',
    paddingBottom: '5px',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '5px !important',
  },
});

export const DetailsButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '16px !important',
  fontSize: '16px!important',
  lineHeight: '22px',
  padding: '12px!important',
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    maxWidth: '125px',
    marginRight: '16px !important',
    fontSize: '14px!important',
    lineHeight: '20px',
    padding: '10px!important',
  },
  [theme.breakpoints.down('lg')]: {
    height: '50px',
    maxWidth: '150px',
    fontSize: '16px!important',
    padding: '12px!important',
  },
  [theme.breakpoints.down('md')]: {
    height: '44px',
    maxWidth: '131px',
    marginRight: '10px !important',
    fontSize: '14px!important',
    lineHeight: '14px',
    padding: '5px!important',
  },
});

export const StartCourseButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '16px !important',
  fontSize: '16px!important',
  lineHeight: '22px',
  padding: '12px!important',
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    maxWidth: '125px',
    marginRight: '16px !important',
    fontSize: '14px!important',
    lineHeight: '20px',
    padding: '10px!important',
  },
  [theme.breakpoints.down('lg')]: {
    height: '50px',
    maxWidth: '150px',
    fontSize: '16px!important',
    padding: '12px!important',
  },
  [theme.breakpoints.down('md')]: {
    height: '44px',
    maxWidth: '131px',
    marginRight: '10px !important',
    fontSize: '14px!important',
    lineHeight: '14px',
    padding: '5px!important',
  },
  '@media(min-width: 1920px)': {
    marginRight: '12px !important',
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

export const MobileSearchWrapper = styled('div')({
  width: '100%',
  margin: '16px 0px 8px 0px',
  height: '30px',
  paddingLeft: '20px !important',
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '0px !important',
  },
  '@media(min-width: 1110px)': {
    display: 'none',
  },
});
