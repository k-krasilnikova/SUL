import { styled } from '@mui/styles';
import { Typography } from '@mui/material';

import globalTheme from 'themeSettings';

export const WarningHelper = styled(Typography)({
  fontSize: '14px !important',
  margin: '0px',
  lineHeight: '16px !important',
  textAlign: 'center',
  fontWeight: '400 !important',
  fontFamily: '"Ubuntu", sans-serif',
  color: globalTheme.palette.primary.main,
  '@media(max-width: 1280px)': {
    minHeight: '27px !important',
  },
  [globalTheme.breakpoints.down('sm')]: {
    minHeight: '16px !important',
  },
});
