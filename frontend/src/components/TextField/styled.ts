import { styled } from '@mui/styles';
import { Typography } from '@mui/material';

import theme from 'themeSettings';

const WarningHelper = styled(Typography)({
  fontSize: '14px',
  margin: '0px',
  marginTop: '15px',
  textAlign: 'center',
  fontFamily: '"Ubuntu", sans-serif',
  color: theme.palette.primary.main,
});

export default WarningHelper;
