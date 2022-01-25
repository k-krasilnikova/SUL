import { Grid } from '@mui/material';

import styled from 'styled-components';

import theme from 'themeSettings';
import Button from 'components/Button';

export const PageContainer = styled(Grid)({
  width: '100%',
  margin: '28px 0px 0px 9px',
});

export const GridItem = styled(Grid)({
  padding: '12px 15px',
  [theme.breakpoints.up('lg')]: {
    maxWidth: '741px',
    height: '391px',
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
  [theme.breakpoints.up('lg')]: {
    margin: '0px 30px 6px 0px',
    width: '150px',
    height: '50px',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '22px',
    letterSpacing: '-0.40px',
    textAlign: 'center',
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
    margin: '0px 16px 6px 0px',
    width: '150px',
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
