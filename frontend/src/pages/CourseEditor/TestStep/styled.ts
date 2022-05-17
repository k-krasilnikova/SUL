import { styled, Box } from '@mui/material';

import theme from 'themeSettings';

export const TestStepContainer = styled(Box)({
  maxWidth: '1440px',
  width: '100%',
  margin: '25px 139px 47px 21px',
  [theme.breakpoints.down('lg')]: {
    padding: '16px',
  },
});

export const TestStepWrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '1011px',
  margin: '24px 0 0 109px',
});

export const TestStepTitle = styled('p')({
  margin: 0,
  fontWeight: 400,
  fontSize: '30px',
  lineHeight: '30px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: 1,
  color: '#2C2525',
});
