/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import { DialogTitle } from '@mui/material';

import { Button } from 'components/Button';
import theme from 'themeSettings';

interface IConfirm {
  width?: number | undefined;
  height?: number | undefined;
}

export const ConfirmBox = styled('div')({
  minWidth: '520px',
  minHeight: '260px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  margin: '0 !important',
  padding: '0 !important',
});

export const ConfirmMessage = styled(DialogTitle)({
  display: 'inline-block',
  width: '100%',
  textAlign: 'center',
  margin: '0px !important',
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: '20px !important',
  fontWeight: '500 !important',
  lineHeight: '26px',
  letterSpacing: '-0.03rem !important',
  color: '#131313',
  marginTop: '33px !important',
});

export const ButtonBox = styled('div')({
  width: '80%',
  height: '50px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '21px !important',
});

export const ButtonCancel = styled(Button)({
  width: '100px !important',
  height: '100%',
  padding: '14px 23px !important',
  fontSize: '18px !important',
  fontWeight: '400 !important',
  marginRight: '25px !important',
});

export const ButtonExit = styled(Button)({
  width: '100px !important',
  height: '100%',
  padding: '14px 23px !important',
  fontSize: '18px !important',
  fontWeight: '400 !important',
  marginLeft: '25px !important',
});

export const CloseButton = styled('div')({
  display: 'flex',
  maxWidth: '12px',
  maxHeight: '12px',
  margin: '8px 8px 0 0',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const CloseButtonBox = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignContent: 'center',
  height: '20px !important',
});

export const CloseIcon = styled('img')({
  width: '12px',
  height: '12px',
  color: theme.palette.primary.main,
});
