import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import styled from 'styled-components';

export const MainDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#131313 !important',
  paddingTop: '24px',
  fontSize: '20px !important',
  fontWeight: '500 !important',
  lineHeight: '26px !important',
  letterSpacing: '-0.4px !important',
  paddingLeft: '130px',
  paddingRight: '130px',
});

export const StyledDialogContent = styled(DialogContent)({
  padding: '0 !important',
});

export const WarningDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#d43e41 !important',
  fontWeight: '500 !important',
  paddingTop: '32px',
  paddingBottom: '8px',
});

export const SecondaryDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#131313 !important',
  fontWeight: '400 !important',
  fontSize: '16px !important',
  letterSpacing: '-0.4px !important',
  lineHeight: '21px !important',
});

export const StyledDialogTitle = styled(DialogTitle)({
  textAlign: 'center',
  padding: '0px !important',
  fontSize: '22px !important',
  letterSpacing: '-0.4px !important',
  paddingTop: '32px !important',
});

export const StyledDialogActions = styled(DialogActions)({
  margin: '0 auto',
  padding: '0 !important',
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
  },
});
