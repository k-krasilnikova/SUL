import { styled, Box, Button, Typography } from '@mui/material';

import theme from 'themeSettings';

export const PageNumberText = styled(Typography)({
  fontSize: '18px',
  color: '#131313',
  padding: '6px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
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
  color: '#000',
  minWidth: '40px',
  '&.MuiButton-root': {
    padding: 0,
  },
});
