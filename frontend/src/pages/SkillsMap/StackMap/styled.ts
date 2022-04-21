import { styled } from '@mui/material';

import theme from 'themeSettings';

export const StackWrapper = styled('div')({
  '& + &': {
    marginTop: '40px',
  },
});

export const StackName = styled('h2')({
  marginTop: 0,
  fontSize: '24px',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
});

export const CourseMapWrapper = styled('div')({
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
});
