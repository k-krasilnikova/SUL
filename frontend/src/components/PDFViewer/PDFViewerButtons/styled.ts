import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/styles';

import theme from 'themeSettings';

export const PageNumberText = styled(Typography)({
  fontSize: '18px !important',
  color: '#131313 !important',
  padding: '6px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px !important',
  },
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'baseline',
  alignSelf: 'flex-end',
  marginRight: '4em',
  [theme.breakpoints.down('md')]: {
    marginRight: '3em',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '2em',
  },
});

export const StyledButton = styled(Button)({
  color: '#000000',
  minWidth: '40px !important',
  '&.MuiButton-root': {
    padding: '0 !important',
  },
});
