import { styled, Box, Button } from '@mui/material';

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
});

export const StyledButton = styled(Button)({
  color: '#131313',
  minWidth: '40px',
  minHeight: '39px',
  '&.MuiButton-root': {
    padding: 0,
  },
  [theme.breakpoints.down('xl')]: {
    minWidth: '40px',
    minHeight: '27px',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '30px',
    minHeight: '18px',
  },
});

export const Step = styled('p')({
  color: '#131313',
  fontSize: '18px',
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 400,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
});
