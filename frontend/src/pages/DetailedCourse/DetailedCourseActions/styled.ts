import { Box } from '@mui/material';
import { styled } from '@mui/material';

import theme from 'themeSettings';

export const DetailedCourseActionsBox = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '50px',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    marginTop: '24px',
    marginLeft: '3px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '56px',
    marginLeft: 0,
  },
});

export const CourseInfoBox = styled(Box)({
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
});
