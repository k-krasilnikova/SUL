import { styled, Grid } from '@mui/material';

import theme from 'themeSettings';

export const PageContainer = styled(Grid)({
  flexGrow: 1,
  maxWidth: '1482px',
  paddingTop: '16px',
  [theme.breakpoints.down('xl')]: {
    padding: '16px 24px 16px 14px',
  },
  [theme.breakpoints.down(950)]: {
    padding: '0 8px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 30px 24px 0',
    margin: '0 0 0 -6px',
  },
});

export const GridItem = styled(Grid)({
  width: '711px',
  paddingLeft: '30px',
  paddingTop: '24px',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
    paddingLeft: '10px',
    paddingTop: '8px',
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0,
  },
});

export const MobileSearchWrapper = styled('div')({
  width: '100%',
  position: 'relative',
  margin: '16px 0 8px 0',
  height: '30px',
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
});
