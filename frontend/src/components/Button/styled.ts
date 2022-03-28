import styled from 'styled-components';

import { Button } from 'components/Button';
import theme from 'themeSettings';

export const CustomButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '16px !important',
  padding: '12px !important',
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    width: '131px',
    marginRight: '9px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 10px!important',
  },
});

export const ButtonsWrapper = styled('div')({
  display: 'flex',
});
