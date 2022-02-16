import { styled } from '@mui/styles';
import { Typography } from '@mui/material';

import theme from 'themeSettings';

export const WarningHelper = styled(Typography)({
  fontSize: '14px !important',
  margin: '0px',
  lineHeight: '16px !important',
  textAlign: 'center',
  fontWeight: '400 !important',
  fontFamily: '"Ubuntu", sans-serif',
  color: theme.palette.primary.main,
});
