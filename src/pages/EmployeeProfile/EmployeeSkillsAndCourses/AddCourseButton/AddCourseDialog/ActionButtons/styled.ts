import { styled } from '@mui/material';

import theme from 'themeSettings';

export const ActionButtonsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 20px',
  marginBottom: '10px',
  '& .MuiButton-root + .MuiButton-root': {
    marginLeft: '50px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '32px',
    },
  },
  [theme.breakpoints.down('xl')]: {
    height: '40px',
  },
});
