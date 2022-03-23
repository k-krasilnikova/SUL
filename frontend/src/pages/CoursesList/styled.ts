import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const PageContainer = styled(Grid)({
  [theme.breakpoints.down('xl')]: {
    padding: '16px 24px 16px 14px',
  },
  [theme.breakpoints.down(950)]: {
    padding: '0px 8px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 30px 24px 0px',
    margin: '0px 0px 0px -6px !important',
  },
  maxWidth: '1482px',
  paddingTop: '16px',
});

export const GridItem = styled(Grid)({
  height: 'fit-content',
  width: '711px',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
    paddingLeft: '10px',
    paddingTop: '8px',
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '0px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '711px',
    paddingLeft: '30px',
    paddingTop: '24px',
  },
});

export const CourseButton = styled(Button)({
  [theme.breakpoints.down('sm')]: {
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
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px',
    minWidth: '250px',
    flexWrap: 'nowrap',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 'auto',
  },
});

export const CourseActionsBox = styled(Box)({
  marginLeft: '8px !important',
});

export const DetailsButton = styled(Button)({
  [theme.breakpoints.down('xl')]: {
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
  [theme.breakpoints.down('xl')]: {
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
    padding: '12px 12px!important',
  },
});

export const MobileLink = styled(Link)({
  [theme.breakpoints.down('sm')]: {
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

export const MobileSearchWrapper = styled('div')({
  width: '100%',
  position: 'relative',
  margin: '16px 0px 8px 0px',
  height: '30px',
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
});

export const CompletedButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '40px !important',
  fontSize: '18px!important',
  lineHeight: '22px',
  padding: '12px 12px!important',
  justifySelf: 'flex-start',
  alignSelf: 'center',
  display: 'flex',
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    width: '131px',
    marginRight: '36px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 0px !important',
  },
});
