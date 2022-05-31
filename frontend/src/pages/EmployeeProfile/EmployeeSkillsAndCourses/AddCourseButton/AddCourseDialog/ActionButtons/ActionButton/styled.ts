import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const StyledButton = styled(Button)({
  minWidth: '86px',
  height: '40px',
  fontSize: '16px',
  [theme.breakpoints.down('md')]: {
    lineHeight: 1,
  },
});
