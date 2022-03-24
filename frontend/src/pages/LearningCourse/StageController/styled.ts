import styled from 'styled-components';
import { Box, Button } from '@mui/material';

import theme from 'themeSettings';

export const StageControllerWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '13px',
  height: '39px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '9px',
    height: '27px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});

export const StyledButton = styled(Button)({
  color: '#131313',
  minWidth: '40px !important',
  minHeight: '39px',
  '&.MuiButton-root': {
    padding: '0 !important',
  },
  [theme.breakpoints.down('xl')]: {
    minWidth: '40px !important',
    minHeight: '27px',
  },
});

export const Step = styled('p')({
  color: '#131313',
  fontSize: '18px !important',
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
  lineHeight: '22px !important',
});
