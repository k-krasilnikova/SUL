import { Box, styled, Typography } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const BackButton = styled(Button)({
  height: '40px',
  width: '85px',
  fontSize: '16px',
  [theme.breakpoints.down('lg')]: {
    height: '32px',
    width: '64px',
    fontSize: '12px',
  },
});

export const InnerWrapper = styled(Box)({
  padding: '32px 139px 29px 40px',
  [theme.breakpoints.down('lg')]: {
    padding: '16px 30px 46px 14px',
  },
});

export const FormWrapper = styled(Box)({
  paddingTop: '44px',
  paddingLeft: '85px',
});

export const SectionName = styled(Typography)({
  fontSize: '26px',
  lineHeight: '130%',
  letterSpacing: '-0.4px',
  color: '#2C2525',
});

export const PageWrapper = styled(Box)({
  maxHeight: '100%',
  overflowY: 'scroll',
});
