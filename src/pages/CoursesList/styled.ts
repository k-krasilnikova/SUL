import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';

import { Button } from 'components/Button';
import theme from 'themeSettings';

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
  margin: '0 15px 0 8px',
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

export const AddButtonWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
  marginTop: '32px',
  marginBottom: '24px',
  [theme.breakpoints.down(950)]: {
    display: 'none',
  },
});

export const AddButton = styled(Button)({
  width: '85px',
  height: '40px',
  [theme.breakpoints.down('xl')]: {
    width: '69px',
    height: '40px',
    fontSize: '14px!important',
    lineHeight: '16px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)!important',
  },
});
