import { styled } from '@mui/material';

import theme from 'themeSettings';

export const ContentWrapper = styled('div')({
  padding: '0 20px',
  flexGrow: '1',
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
});
