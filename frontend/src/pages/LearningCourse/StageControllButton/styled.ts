import styled from 'styled-components';
import { Button } from '@mui/material';

import theme from 'themeSettings';

export const StageControllButtonWrapper = styled('div')({
  display: 'inline-block',
  verticalAlign: 'top',
  width: '155px',
  marginLeft: '40px',
  color: 'white',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '38px',
  },
  [theme.breakpoints.down('md')]: {
    width: '120px',
    marginLeft: '70px',
  },
});

export const StageButton = styled(Button)({
  maxWidth: '155px',
  minWidth: '86px!important',
  height: '50px',
  fontSize: '18px!important',
  fontWeight: '500!important',
  lineHeight: '22px',
  textAlign: 'center',
  background: '#D43E41',
  '&hover': {
    background: '#D43E41',
  },
  paddingTop: '8px!important',
  boxShadow: 'none!important',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px!important',
    maxWidth: '120px',
    height: '36px',
  },
});
