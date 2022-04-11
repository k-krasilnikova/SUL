import styled from 'styled-components';

import { Button } from 'components/Button';

import theme from 'themeSettings';

export const StyledButton = styled(Button)({
  height: '40px',
  minWidth: '86px',
  margin: '-2px 0 0 500px !important',
  fontSize: '16px !important',
  [theme.breakpoints.down('xl')]: {
    height: '36px',
    margin: '-2px 0 0 30% !important',
  },
  [theme.breakpoints.down('lg')]: {
    height: '32px',
    margin: '-2px 0 0 10% !important',
    fontSize: '14px !important',
  },
  [theme.breakpoints.down('md')]: {
    height: '28px',
    margin: '0 0 0 7% !important',
  },
});
