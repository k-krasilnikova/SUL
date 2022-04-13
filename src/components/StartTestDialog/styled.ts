import { DialogContentText, DialogTitle, DialogActions } from '@mui/material';
import styled from 'styled-components';

import theme from 'themeSettings';
import Button from 'components/Button';

export const StyledDialogTitle = styled(DialogTitle)({
  '&.MuiDialogTitle-root': {
    padding: '4px 0 0 ',
    fontSize: '22px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
});

export const MainDialogContentText = styled(DialogContentText)({
  '&.MuiDialogContentText-root': {
    fontSize: '20px',
    marginBottom: '32px',
    padding: '24px 90px 0',
    [theme.breakpoints.down('md')]: {
      marginBottom: '28px',
      padding: '24px 12px 0',
    },
  },
});

export const WarningDialogContentText = styled(DialogContentText)({
  '&.MuiDialogContentText-root': {
    margin: '0 0 8px',
    color: '#d43e41',
    fontSize: '16px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '4px',
      fontSize: '14px',
    },
  },
});

export const SecondaryDialogContentText = styled(DialogContentText)({
  '&.MuiDialogContentText-root': {
    marginBottom: '16px',
    fontSize: '16px',
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
      marginBottom: '32px',
      fontSize: '14px',
    },
  },
});

export const StyledDialogActions = styled(DialogActions)({
  '&.MuiDialogActions-root': {
    height: '50px',
    margin: '8px 0 24px',
    [theme.breakpoints.down('md')]: {
      height: '40px',
    },
  },
});

export const StyledButton = styled(Button)({
  '&.MuiButton-root': {
    height: '100%',
    minWidth: '155px',
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
      minWidth: '134px',
      padding: '6px 16px',
      fontSize: '16px',
    },
  },
});
