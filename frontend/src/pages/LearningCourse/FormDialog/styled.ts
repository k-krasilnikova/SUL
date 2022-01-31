import { Button, Dialog, DialogContentText, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

import theme from 'themeSettings';

export const MainDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#131313 !important',
  marginTop: '24px !important',
  marginBottom: '32px !important',
  fontSize: '20px !important',
  fontWeight: '500 !important',
  lineHeight: '26px !important',
  letterSpacing: '-0.4px !important',
});

export const WarningDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#d43e41 !important',
  fontWeight: '500 !important',
});

export const SecondaryDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#131313 !important',
  fontWeight: '400 !important',
  fontSize: '16px !important',
  letterSpacing: '-0.4px !important',
  lineHeight: '21px !important',
  marginTop: '8px !important',
});

export const StyledDialogTitle = styled(DialogTitle)({
  textAlign: 'center',
  padding: '0px !important',
  fontSize: '22px !important',
  letterSpacing: '-0.4px !important',
  lineHeight: '21px !important',
  marginTop: '12px !important',
});

export const StyledButton = styled(Button)({
  height: '50px',
  width: '155px',
  fontSize: '18px !important',
  marginBottom: '35px !important',
  marginTop: '16px !important',
  letterSpacing: '-0.4px !important',
  lineHeight: '21px !important',
});

export const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    borderRadius: '5px',
    boxShadow: 'none',
    minWidth: '660px !important',
    maxHeight: '335px !important',
  },
});

export const CloseButton = styled('div')({
  maxWidth: '12px',
  maxHeight: '12px',
  color: theme.palette.primary.main,
  margin: '7px 7px 0 0',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const CloseButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignContent: 'center',
});

export const StyledButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
});
