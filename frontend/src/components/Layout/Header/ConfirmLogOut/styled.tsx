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
    minWidth: '520px',
    minHeight: '260px',
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
    marginTop: '31px !important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px!important',
    marginTop: '35px !important',
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
    marginTop: '21px !important',
    height: '50px',
    width: '80%',
  },
});

export const ButtonCancel = styled(Button)({
  width: '100px !important',
  height: '100%',
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
