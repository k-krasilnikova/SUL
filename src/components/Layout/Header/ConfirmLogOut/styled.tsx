import styled from 'styled-components';
import { DialogTitle } from '@mui/material';

import { Button } from 'components/Button';
import theme from 'themeSettings';

export const ConfirmBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  margin: '0 !important',
  padding: '0 !important',
  [theme.breakpoints.up('xs')]: {
    minWidth: '241px',
    minHeight: '215px',
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '378px',
  },
  [theme.breakpoints.up('xl')]: {
    minWidth: '660px',
    minHeight: '335px',
  },
});

export const ConfirmMessage = styled(DialogTitle)({
  display: 'inline-block',
  width: '100%',
  textAlign: 'center',
  margin: '0px !important',
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: '20px',
  fontWeight: '500 !important',
  lineHeight: '26px',
  letterSpacing: '-0.03rem !important',
  color: '#131313',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px!important',
    marginTop: '51px !important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px!important',
    marginTop: '73px !important',
  },
});

export const ButtonBox = styled('div')({
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px !important',
  [theme.breakpoints.up('xs')]: {
    marginTop: '8px !important',
    height: '32px',
    width: '40%',
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: '30px !important',
    height: '50px',
    width: '80%',
  },
});

export const ButtonCancel = styled(Button)({
  width: '100px !important',
  height: '100%',
  background: '#E19697 !important',
  padding: '14px 23px !important',
  fontSize: '18px !important',
  fontWeight: '400 !important',
  marginRight: '25px !important',
  [theme.breakpoints.up('xs')]: {
    marginRight: '16px !important',
    fontSize: '12px !important',
    padding: '8px 21px !important',
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: '25px !important',
    fontSize: '18px !important',
    padding: '14px 23px !important',
  },
});

export const ButtonExit = styled(Button)({
  width: '100px !important',
  height: '100%',
  padding: '14px 23px !important',
  fontSize: '18px !important',
  fontWeight: '400 !important',
  [theme.breakpoints.up('xs')]: {
    marginLeft: '16px !important',
    fontSize: '12px !important',
    padding: '8px 21px !important',
  },
  [theme.breakpoints.up('xl')]: {
    marginLeft: '25px !important',
    fontSize: '18px !important',
    padding: '14px 23px !important',
  },
});
