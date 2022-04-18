import { styled, Typography } from '@mui/material';

import globalTheme from 'themeSettings';

export const WarningHelper = styled(Typography)({
  fontSize: '14px',
  margin: 0,
  lineHeight: '16px',
  textAlign: 'center',
  fontWeight: '400 ',
  fontFamily: '"Ubuntu", sans-serif',
  color: globalTheme.palette.primary.main,
  '@media(max-width: 1280px)': {
    minHeight: '27px',
  },
  [globalTheme.breakpoints.down('sm')]: {
    minHeight: '16px',
  },
});
