import { styled } from '@mui/material';

import theme from 'themeSettings';

export const ActionButtonWrapper = styled('div')({
  display: 'inline-block',
  verticalAlign: 'top',
  width: '155px',
  marginLeft: '40px',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '38px',
  },
  [theme.breakpoints.down('md')]: {
    width: '120px',
    marginLeft: '70px',
  },
});
