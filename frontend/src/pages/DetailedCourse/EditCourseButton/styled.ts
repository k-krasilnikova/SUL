import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const StyledButton = styled(Button)({
  height: '40px',
  width: '85px',
  fontSize: '18px',
  boxShadow: '0 4px 4px 0 #00000040',
  [theme.breakpoints.down('lg')]: {
    height: '32px',
    width: '69px',
    fontSize: '14px',
    boxShadow: 'none',
  },
});
