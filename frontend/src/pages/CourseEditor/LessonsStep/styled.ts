import { styled, Box, Button } from '@mui/material';

export const LessonsStepWrapper = styled(Box)({
  maxWidth: '1010px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const LessonButton = styled(Button)({
  display: 'flex',
  alignSelf: 'flex-end',
  fontSize: '18px',
  width: '136px',
  height: '50px',
  fontWeight: 500,
  '&.MuiButton-root.Mui-disabled': {
    backgroundColor: '#E19697',
    color: '#FFF',
    border: 'none',
  },
});
