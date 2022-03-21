import styled from 'styled-components';

import { Button } from 'components/Button';
import theme from 'themeSettings';

export const ButtonCancel = styled(Button)({
  '&.MuiButton-root ': {
    [theme.breakpoints.up('xs')]: {
      marginRight: '16px',
    },
    [theme.breakpoints.up('xl')]: {
      marginRight: '25px',
    },
  },
});

export const ButtonExit = styled(Button)({
  '&.MuiButton-root ': {
    [theme.breakpoints.up('xs')]: {
      marginLeft: '16px',
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '25px',
    },
  },
});
