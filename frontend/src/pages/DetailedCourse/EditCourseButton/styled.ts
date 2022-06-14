import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const StyledButton = styled(Button)({
  height: '40px',
  width: '85px',
  fontSize: '18px',
  boxShadow: 'none',
  [theme.breakpoints.down('lg')]: {
    height: '32px',
    width: '69px',
    fontSize: '14px',
  },
});
