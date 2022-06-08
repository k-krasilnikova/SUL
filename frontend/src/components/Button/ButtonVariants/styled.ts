import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const CustomButton = styled(Button)({
  height: '50px',
  width: '150px',
  fontSize: '16px',
  minWidth: '131px',
  marginRight: '16px',
  padding: '12px',
  [theme.breakpoints.down('xl')]: {
    height: '44px',
    width: '131px',
    marginRight: '9px',
    fontSize: '14px',
    lineHeight: '19px',
    padding: '10px 10px',
  },
  [theme.breakpoints.down('md')]: {
    height: '36px',
    width: '120px',
  },
});

export const ButtonsWrapper = styled('div')({
  display: 'flex',
});
