import { Grid } from '@mui/material';

import styled from 'styled-components';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const PageContainer = styled(Grid)({
  height: 'calc(100vh - 90px)',
  width: '100%',
  overflowY: 'scroll',
  margin: '0px',
});

export const GridItem = styled(Grid)({
  padding: '15px',
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
    width: '150px',
    height: '50px',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '22px',
    letterSpacing: '-0.40px',
    textAlign: 'center',
    marginRight: '30px',
  },
  background: '#D43E41',
  textTransform: 'none',
});
export const DetailsButton = styled(Button)({
  [theme.breakpoints.up('xs')]: {
    margin: '3px',
    fontSize: '10px',
    alignSelf: 'center',
    height: '40px',
    width: '120px',
    lineHeight: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '150px',
    marginLeft: '5px',
    marginRight: '16px',
    height: '50px',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '22px',
    letterSpacing: '-0.40px',
    textAlign: 'center',
  },
  background: 'none',
  border: '2.5px solid #D43E41',
  borderRadius: '4px',
  textTransform: 'none',
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
