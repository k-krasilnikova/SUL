import { styled } from '@mui/material';

import theme from 'themeSettings';
import Button from 'components/Button';

export const EmployeeProfileWrapper = styled('div')({
  padding: '40px',
  fontFamily: theme.typography.fontFamily,
  [theme.breakpoints.down('xl')]: {
    padding: '24px',
  },
});

export const BackButton = styled(Button)({
  height: '39px',
  width: '84px',
  fontSize: '16px',
  [theme.breakpoints.down('xl')]: {
    height: '32px',
    width: '64px',
    fontSize: '12px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none ',
  },
});
