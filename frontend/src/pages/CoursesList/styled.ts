import { styled, Grid } from '@mui/material';

import theme from 'themeSettings';

export const CoursesContainer = styled(Grid)({
  maxWidth: '1482px',
  padding: '16px 30px 24px 0',
  margin: '0 0 0 -6px',
  [theme.breakpoints.down('xl')]: {
    padding: '16px 24px 16px 14px',
  },
  [theme.breakpoints.down(950)]: {
    padding: '0 8px',
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
