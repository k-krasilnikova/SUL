import { styled } from '@mui/material';

import theme from 'themeSettings';

export const Arrow = styled('svg')({
  [theme.breakpoints.down('sm')]: {
    width: '5px',
    height: '11px',
  },
});
