import { styled, Box } from '@mui/material';

import theme from 'themeSettings';
import Button from 'components/Button';

export const LessonsStepContainer = styled(Box)({
  maxWidth: '1011px',
  width: '100%',
  margin: '25px 0 47px 103px',
  [theme.breakpoints.down('lg')]: {
    padding: '16px',
  },
});

export const LessonsStepWrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '24px 0 50px 0',
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

export const LessonButton = styled(Button)({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  alignSelf: 'flex-end',
  fontSize: '18px',
  width: '136px',
  height: '50px',
  fontWeight: 500,
});
