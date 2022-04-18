import { Box } from '@mui/material';
import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const ButtonsBox = styled(Box)({
  marginTop: '103px',
  marginRight: '333px',
  marginLeft: '125px',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('xl')]: {
    marginTop: '78px',
    marginRight: '190px',
    marginLeft: '88px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '28px',
    marginRight: '5vw ',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '11px',
    marginLeft: 0,
  },
});

export const ResultButton = styled(Button)({
  height: '50px',
  width: '98px',
  fontSize: '18px',
  fontWeight: '500 ',
  '&.MuiButton-root.Mui-disabled': {
    backgroundColor: '#E19697',
    color: '#ffffff',
  },
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
    padding: 0,
  },
});

export const NextButton = styled(Button)({
  height: '50px',
  width: '86px',
  fontSize: '18px',
  fontWeight: '500 ',
  '&:disabled': {
    backgroundColor: '#E19697',
    color: '#ffffff ',
  },
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
    padding: 0,
  },
});

export const PreviousButton = styled(Button)({
  width: '116px',
  height: '50px',
  fontSize: '18px',
  fontWeight: '500 ',
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
    padding: 0,
  },
});
