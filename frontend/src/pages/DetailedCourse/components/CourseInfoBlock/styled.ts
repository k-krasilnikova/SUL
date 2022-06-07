import { styled, Grid, Typography } from '@mui/material';

import theme from 'themeSettings';

export const CourseInfoBlockWrapper = styled(Grid)({
  margin: '60px 0 40px 0',
  [theme.breakpoints.down('md')]: {
    margin: '40px 0 20px 0',
  },
});

export const CourseInfoBlockTitle = styled(Typography)({
  marginBottom: '40px',
  fontSize: '24px',
  fontWeight: 700,
  color: '#2C2525',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    marginBottom: '16px',
  },
});
