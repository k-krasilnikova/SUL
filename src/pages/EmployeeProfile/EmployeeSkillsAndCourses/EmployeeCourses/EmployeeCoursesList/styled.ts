import { styled, Box } from '@mui/material';

import theme from 'themeSettings';

export const CoursesList = styled('div')({
  maxWidth: '100%',
  [theme.breakpoints.down('xl')]: {
    paddingTop: '16px',
    maxWidth: '828px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '10px',
    maxWidth: '288px',
  },
});

export const CourseListItemWrapper = styled(Box)({
  '&:last-child .MuiDivider-root': {
    display: 'none',
  },
});

export const NoCourses = styled('div')({
  marginTop: '80px',
  [theme.breakpoints.down('lg')]: {
    marginTop: '50px',
  },
});
