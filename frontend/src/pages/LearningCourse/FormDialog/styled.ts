import { DialogContentText, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const DialogBox = styled('div')({
  [theme.breakpoints.up('xs')]: {
    width: '256px',
    height: '340px',
  },
  [theme.breakpoints.up('md')]: {
    width: '660px',
    height: '335px',
  },
});

export const MainDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#131313 !important',
  marginTop: '24px !important',
  fontWeight: '500 !important',
  letterSpacing: '-0.4px !important',
  [theme.breakpoints.up('xs')]: {
    padding: '0px 26px',
    marginBottom: '28px !important',
    lineHeight: '19px !important',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0px 130px',
    marginBottom: '40px !important',
    lineHeight: '26px !important',
  },
});

export const WarningDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#d43e41 !important',
  fontWeight: '500 !important',
  fontSize: '16px',
  lineHeight: '22px',
});

export const SecondaryDialogContentText = styled(DialogContentText)({
  textAlign: 'center',
  color: '#131313 !important',
  fontWeight: '400 !important',
  fontSize: '16px !important',
  letterSpacing: '-0.4px !important',
  lineHeight: '21px !important',
  [theme.breakpoints.up('xs')]: {
    marginTop: '4px !important',
    fontSize: '14px !important',
    lineHeight: '18px !important',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '8px !important',
    fontSize: '16px !important',
    lineHeight: '21px !important',
  },
});

export const StyledDialogTitle = styled(DialogTitle)({
  textAlign: 'center',
  padding: '0px !important',
  letterSpacing: '-0.4px !important',
  lineHeight: '21px !important',
  marginTop: '12px !important',
  [theme.breakpoints.up('xs')]: {
    fontSize: '18px !important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '22px !important',
  },
});

export const StyledButton = styled(Button)({
  letterSpacing: '-0.4px !important',
  lineHeight: '21px !important',
  [theme.breakpoints.up('xs')]: {
    height: '40px',
    width: '134px',
    fontSize: '16px !important',
  },
  [theme.breakpoints.up('md')]: {
    height: '50px',
    width: '155px',
    fontSize: '18px !important',
  },
});

export const CloseButton = styled('div')({
  maxWidth: '13px',
  maxHeight: '13px',
  margin: '7px 7px 0 0',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const CloseButtonBox = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignContent: 'center',
});

export const StyledButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  margin: '0',
  [theme.breakpoints.up('xs')]: {
    paddingBottom: '30px !important',
    paddingTop: '24px !important',
  },
  [theme.breakpoints.up('md')]: {
    paddingBottom: '26px !important',
    paddingTop: '16px !important',
  },
});

export const CloseIcon = styled('img')({
  width: '13px',
  height: '13px',
  color: theme.palette.primary.main,
});
