import { styled } from '@mui/material';

import theme from 'themeSettings';

export const ProfileWrapper = styled('div')({
  margin: '88px 40px 70px 122px',
  [theme.breakpoints.down('xl')]: {
    margin: '60px 40px 60px 40px',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '40px 40px 50px 40px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '30px 20px 30px 60px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '30px 10px 30px 20px',
  },
});
