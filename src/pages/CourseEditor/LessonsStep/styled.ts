import { styled, Box } from '@mui/material';

import theme from 'themeSettings';
import Button from 'components/Button';

export const LessonsStepContainer = styled(Box)({
  width: '100%',
  padding: '32px 139px 47px 34px',
  [theme.breakpoints.down('lg')]: {
    padding: '16px',
  },
});

export const BackButton = styled(Button)({
  width: '85px',
  height: '40px',
  fontSize: '18px',
  lineHeight: '22px',
  [theme.breakpoints.down('xl')]: {
    height: '32px',
    width: '64px',
    padding: 0,
    fontSize: '12px',
    fontWeight: 500,
  },
  [theme.breakpoints.down('sm')]: {
    height: '20px',
    width: '40px',
    minWidth: '40px',
    fontSize: '10px',
    fontWeight: 400,
  },
});

export const LessonsStepWrapper = styled(Box)({
  width: '1011px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '24px 0 0 109px',
  [theme.breakpoints.down('xl')]: {},
});

export const LessonsStepTitle = styled('p')({
  margin: 0,
  fontWeight: 400,
  fontSize: '30px',
  lineHeight: '30px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: 1,
  color: '#2C2525',
});

export const LessonsStepBox = styled(Box)({});

export const ButtonsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const PreviousButton = styled(Button)({
  width: '103px',
  height: '40px',
  fontSize: '18px',
  lineHeight: '22px',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
    padding: 0,
  },
});

export const NextButton = styled(Button)({
  width: '85px',
  height: '40px',
  fontSize: '18px',
  fontWeight: 500,
  '&:disabled': {
    backgroundColor: '#E19697',
    color: '#FFF',
  },
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
    padding: 0,
  },
});
