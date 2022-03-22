import { styled } from '@material-ui/core';
import { Button } from 'components/Button';

import theme from 'themeSettings';

export const MyButton = styled(Button)({
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    width: '131px',
    marginRight: '9px !important',
    fontSize: '14px!important',
    lineHeight: '19px',
    padding: '10px 10px!important',
  },
  [theme.breakpoints.up('xl')]: {
    height: '50px',
    width: '150px',
    marginRight: '16px !important',
    fontSize: '16px!important',
    lineHeight: '22px',
    padding: '12px 12px!important',
  },
});

export const ButtonsWrapper = styled('div')({
  display: 'flex',
});
