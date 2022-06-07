import { styled, Box, Grid } from '@mui/material';

import theme from 'themeSettings';

export const SimilarCoursesItemWrapper = styled(Grid)({
  maxWidth: '710px',
  marginBottom: '40px',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '500px',
    marginBottom: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginBottom: '8px',
  },
  '&:last-child': {
    marginBottom: 0,
  },
});

export const CourseActionsBox = styled(Box)({
  marginLeft: '16px',
});
