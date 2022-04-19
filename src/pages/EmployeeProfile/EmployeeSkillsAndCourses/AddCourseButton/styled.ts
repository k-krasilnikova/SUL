import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const StyledButton = styled(Button)({
  height: '40px',
  minWidth: '86px',
  margin: '-2px 0 0 500px',
  fontSize: '16px',
  [theme.breakpoints.down('xl')]: {
    height: '36px',
    margin: '-2px 0 0 30%',
  },
  [theme.breakpoints.down('lg')]: {
    height: '32px',
    margin: '-2px 0 0 10%',
    fontSize: '14px',
  },
  [theme.breakpoints.down('md')]: {
    height: '28px',
    margin: '0 0 0 7%',
  },
});
