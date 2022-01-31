import styled from 'styled-components';
import { Button } from 'components/Button';

import theme from 'themeSettings';

export const ComfirmWrapper = styled('div')({
  minHeight: '120vh',
  width: '100%',
  height: '100%',
  marginTop: '-7%',
  background: 'rgb(125, 125, 125, 0.30)',
  position: 'fixed',
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 16,
  overflow: 'hidden',
});

export const ComfirmBox = styled('div')({
  minWidth: '660px',
  minHeight: '335px',
  background: `${theme.palette.secondary.main} !important`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  borderRadius: '5px',
});

export const ComfirmMessage = styled('p')({
  display: 'inline-block',
  width: '100%',
  textAlign: 'center',
  margin: '0px !important',
  fontFamily: "'Ubuntu', sans-serif",
  fontSize: '20px !important',
  fontWeight: '500 !important',
  lineHeight: '26px',
  letterSpacing: '-0.41px',
  color: '#131313',
  marginTop: '91px !important',
});

export const ButtonBox = styled('div')({
  width: '80%',
  height: '50px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px !important',
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
  marginRight: '20.5px !important',
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
  marginLeft: '20.5px !important',
});
