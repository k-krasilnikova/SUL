import styled from 'styled-components';

import { Grid, Box } from '@mui/material';
import theme from 'themeSettings';
import { Button } from 'components/Button';

export const PageContainer = styled(Grid)({
  '@media(max-width: 1110px)': {
    paddingTop: '40px',
  },
  [theme.breakpoints.down('xl')]: {
    maxWidth: '100%',
    margin: '0px !important',
  },
  width: '100%',
  paddingRight: '147px !important',
  paddingTop: '2.5% !important',
  paddingLeft: '11px !important',
  marginLeft: '-18px !important',
});

export const GridItem = styled(Grid)({
  height: 'fit-content',
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
  [theme.breakpoints.up('lg')]: {
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
  [theme.breakpoints.down('lg')]: {
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
});

export const StartCourseButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '40px !important',
});
