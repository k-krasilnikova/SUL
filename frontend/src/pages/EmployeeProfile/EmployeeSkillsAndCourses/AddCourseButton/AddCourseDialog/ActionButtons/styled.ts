import { styled } from '@mui/material';

import theme from 'themeSettings';

export const ActionButtonsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  height: '44px',
  padding: '0 20px',
  marginBottom: '10px',
  '& .MuiButton-root:first-child': {
    width: '220px',
    [theme.breakpoints.down('md')]: {
      width: '114px',
    },
  },
  '& .MuiButton-root': {
    padding: '10px 14px',
    fontSize: '16px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
  '& .MuiButton-root + .MuiButton-root': {
    marginLeft: '50px',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  },
  [theme.breakpoints.down('md')]: {
    justifyContent: 'space-between',
    height: '46px',
    padding: '0 4px',
  },
});
