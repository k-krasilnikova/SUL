import { Grid } from '@mui/material';

import styled from 'styled-components';

import theme from 'themeSettings';
import Button from 'components/Button';

export const PageContainer = styled(Grid)({
  [theme.breakpoints.down('xl')]: {
    maxHeight: '100vh',
    maxWidth: '100%',
    overflowY: 'scroll',
    margin: '0px !important',
  },
  border: '1px solid #ebebeb',
  borderRadius: '10px',
  width: '100%',
  margin: '0px !important',
  marginTop: '25px !important',
});

export const GridItem = styled(Grid)({
  padding: '15px',
  overflow: 'scroll',
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
});

export const CourseActions = styled('div')({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px',
    minWidth: '250px',
  },
  '@media(max-width: 1230px)': {
    display: 'flex',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px',
    minWidth: '250px',
  },
  '@media(max-width: 580px)': {
    display: 'flex',
    justifyContent: 'center',
  },
});
