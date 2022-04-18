import { styled, Typography } from '@mui/material';

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
