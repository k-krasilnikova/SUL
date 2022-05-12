import { Box, styled } from '@mui/material';

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
