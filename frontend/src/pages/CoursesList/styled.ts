import { Link } from 'react-router-dom';
import { styled, Grid } from '@mui/material';

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
    margin: '0px 0px 0px -6px',
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
    paddingLeft: 0,
  },
  [theme.breakpoints.up('xl')]: {
    width: '711px',
    paddingLeft: '30px',
    paddingTop: '24px',
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
