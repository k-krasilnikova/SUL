import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const AddButtonWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  margin: '16px 0 0 30px',
  [theme.breakpoints.down('xl')]: {
    margin: '16px 0 0 25px',
  },
  [theme.breakpoints.down(950)]: {
    display: 'none',
  },
});

export const AddButton = styled(Button)({
  width: '85px',
  height: '40px',
  boxShadow: 'none',
  [theme.breakpoints.down('xl')]: {
    width: '69px',
    height: '40px',
    fontSize: '14px',
    lineHeight: '10px',
  },
});
