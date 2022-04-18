import { styled } from '@mui/material';

import theme from 'themeSettings';

export const CoursesBox = styled('div')({
  maxWidth: '100%',
  marginLeft: 0,
  marginRight: 0,
  [theme.breakpoints.down('xl')]: {
    maxWidth: '828px',
    marginLeft: '54px',
    marginRight: '47px',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '54px',
    marginRight: '19px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '288px',
    marginLeft: '13px',
    marginRight: '19px',
  },
});
