import styled from 'styled-components';

import { Button } from 'components/Button';
import theme from 'themeSettings';

export const ButtonCancel = styled(Button)({
  '&.MuiButton-root ': {
    marginRight: '25px',
    [theme.breakpoints.down('md')]: {
      marginRight: '16px',
    },
  },
});

export const ButtonExit = styled(Button)({
  '&.MuiButton-root ': {
    marginLeft: '25px !important',
    [theme.breakpoints.down('md')]: {
      marginLeft: '16px !important',
    },
  },
});
