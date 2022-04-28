import { styled } from '@mui/material';

import theme from 'themeSettings';
import Button from 'components/Button';

export const EmployeeWrapper = styled('div')({
  padding: '40px',
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down('xl')]: {
    padding: '24px',
  },
});

export const ProfileWrapper = styled('div')({
  margin: '24px 0 92px 165px',
  [theme.breakpoints.down('xl')]: {
    margin: '8px 0 50px 122px',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '8px 0 50px 78px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '16px 0 25px 16px',
  },
});

export const BackButton = styled(Button)({
  height: '39px',
  width: '84px',
  fontSize: '16px',
  [theme.breakpoints.down('xl')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});
