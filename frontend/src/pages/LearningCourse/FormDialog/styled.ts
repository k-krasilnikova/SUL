import { DialogContentText, DialogTitle, DialogActions } from '@mui/material';
import styled from 'styled-components';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const StyledDialogTitle = styled(DialogTitle)({
  '&.MuiDialogTitle-root': {
    padding: '4px 0 0 ',
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '22px',
    },
  },
});

export const MainDialogContentText = styled(DialogContentText)({
  '&.MuiDialogContentText-root': {
    [theme.breakpoints.up('xs')]: {
      marginBottom: '28px',
      padding: '24px 12px 0',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
      marginBottom: '32px',
      padding: '24px 90px 0',
    },
  },
});

export const WarningDialogContentText = styled(DialogContentText)({
  '&.MuiDialogContentText-root': {
    margin: '0',
    color: '#d43e41',
    [theme.breakpoints.up('xs')]: {
      marginBottom: '4px',
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '8px',
      fontSize: '16px',
    },
  },
});

export const SecondaryDialogContentText = styled(DialogContentText)({
  '&.MuiDialogContentText-root': {
    fontWeight: '400',
    [theme.breakpoints.up('xs')]: {
      marginBottom: '32px',
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: '16px',
      fontSize: '16px',
    },
  },
});

export const StyledDialogActions = styled(DialogActions)({
  '&.MuiDialogActions-root': {
    marginTop: '8px',
    marginBottom: '24px',
    [theme.breakpoints.up('xs')]: {
      height: '40px',
    },
    [theme.breakpoints.up('md')]: {
      height: '50px',
    },
  },
});

export const StyledButton = styled(Button)({
  '&.MuiButton-root': {
    [theme.breakpoints.up('xs')]: {
      height: '40px',
      width: '134px',
      padding: '6px 16px',
      fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
      height: '50px',
      width: '155px',
      fontSize: '18px',
    },
  },
});
