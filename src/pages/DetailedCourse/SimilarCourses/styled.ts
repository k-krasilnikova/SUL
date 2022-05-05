import { styled, Box, Grid, Typography } from '@mui/material';

import theme from 'themeSettings';

export const SimilarCoursesWrapper = styled(Grid)({
  marginTop: '63px',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: '48px',
    marginBottom: '10px',
  },
});

export const SimilarCoursesItemWrapper = styled(Grid)({
  maxWidth: '710px',
  marginTop: '40px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '8px',
    width: '100%',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '500px',
    marginTop: '16px',
  },
});

export const SimilarCoursesTitle = styled(Typography)({
  fontWeight: 'bold',
  color: '#2C2525',
  letterSpacing: '-0.4px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: '21px',
    marginLeft: '8px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
    lineHeight: '24px',
    marginLeft: 0,
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '24px',
    lineHeight: '52px',
  },
});

export const CourseActionsBox = styled(Box)({
  marginLeft: '16px',
});
