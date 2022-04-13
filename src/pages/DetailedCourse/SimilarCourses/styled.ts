import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';

import theme from 'themeSettings';

export const SimilarCoursesWrapper = styled(Grid)({
  marginTop: '63px',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    marginTop: '48px',
    marginBottom: '10px',
    width: '100%',
  },
});

export const SimilarCoursesItemWrapper = styled(Grid)({
  width: '711px',
  marginTop: '40px',
  [theme.breakpoints.up('xs')]: {
    marginTop: '8px',
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '500px',
    marginTop: '16px',
    maxHeight: '254px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '711px',
    marginTop: '40px',
    maxHeight: '361px',
  },
});

export const SimilarCoursesTitle = styled(Typography)({
  fontWeight: 'bold !important',
  color: '#2C2525',
  letterSpacing: '-0.4px !important',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px !important',
    lineHeight: '21px !important',
    marginLeft: '8px!important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px !important',
    lineHeight: '24px !important',
    marginLeft: '0px!important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '24px !important',
    lineHeight: '52px !important',
  },
});

export const CourseActionsBox = styled(Box)({
  marginLeft: '16px !important',
});
