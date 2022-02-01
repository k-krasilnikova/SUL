import styled from 'styled-components';
import { Button } from 'components/Button';
import { DialogTitle } from '@mui/material';

import theme from 'themeSettings';

export const ConfirmBox = styled('div')({
  minWidth: '660px',
  minHeight: '335px',
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
  marginTop: '73px !important',
});

export const ButtonBox = styled('div')({
  width: '80%',
  height: '50px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px !important',
});

export const ButtonCancel = styled(Button)({
  width: '100px !important',
  height: '100%',
  background: '#E19697 !important',
  padding: '14px 23px !important',
  borderRadius: '4px',
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: '18px !important',
  fontWeight: '400 !important',
  letterSpacing: '-0.41px',
  marginRight: '25px !important',
});

export const ButtonExit = styled(Button)({
  width: '100px !important',
  height: '100%',
  background: `${theme.palette.primary.main} !important`,
  padding: '14px 23px !important',
  borderRadius: '4px',
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: '18px !important',
  fontWeight: '400 !important',
  letterSpacing: '-0.41px',
  marginLeft: '25px !important',
});
