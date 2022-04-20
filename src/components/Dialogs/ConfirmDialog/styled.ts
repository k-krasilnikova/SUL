import { styled, DialogTitle, DialogActions } from '@mui/material';

import theme from 'themeSettings';

export const ConfirmMessage = styled(DialogTitle)({
  margin: 0,
  lineHeight: '1.4',
  padding: '16px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    marginTop: '24px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
    marginTop: '28px',
  },
});

export const StyledDialogActions = styled(DialogActions)({
  '& .MuiButton-root + .MuiButton-root': {
    marginLeft: '50px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '32px',
    },
  },
});
