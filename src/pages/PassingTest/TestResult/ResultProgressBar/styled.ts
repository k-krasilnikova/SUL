import { Box } from '@mui/material';
import { styled } from '@mui/styles';

import theme from 'themeSettings';

export const ProgressBarBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '32px',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '24px',
  },
});
