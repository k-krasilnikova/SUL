import { styled, Box } from '@mui/material';

import theme from 'themeSettings';
import Button from 'components/Button';

export const LessonsStepContainer = styled(Box)({
  maxWidth: '1440px',
  width: '100%',
  margin: '25px 139px 47px 21px',
  [theme.breakpoints.down('lg')]: {
    padding: '16px',
  },
});

export const LessonsStepWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '24px 0 0 109px',
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

export const AddMoreLessonsButton = styled(Button)({
  position: 'absolute',
  bottom: '50px',
  right: 0,
  width: '138px',
  height: '40px',
  fontSize: '16px',
  lineHeight: '18px',
  fontWeight: 500,
  backgroundColor: '#FFF',
  color: '#D43E41',
  border: '1px solid #D43E41',
  '&:hover': {
    color: '#E19697',
  },
  '&:focus': {
    color: '#2C2525',
  },
  [theme.breakpoints.down('lg')]: {
    padding: 0,
    fontSize: '14px',
  },
});

export const LessonButton = styled(Button)({
  display: 'flex',
  alignSelf: 'flex-end',
  fontSize: '18px',
  width: '136px',
  height: '50px',
  fontWeight: 500,
});
