import { styled } from '@mui/material';

import theme from 'themeSettings';

export const EmployeesWrapper = styled('div')({
  padding: '41px 40px',
  overflow: 'auto',
  [theme.breakpoints.down('xl')]: {
    padding: '16px',
  },
});
