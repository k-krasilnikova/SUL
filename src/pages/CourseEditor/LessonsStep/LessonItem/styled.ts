import { styled, Box, TextareaAutosize, Typography } from '@mui/material';

import { SectionName } from 'pages/CourseEditor/styled';

export const LessonItemWrapper = styled(Box)({
  margin: '32px 0 28px',
});

export const ItemTitle = styled(SectionName)({
  fontSize: '24px',
});

export const LessonInnerBox = styled(Box)({
  marginTop: '30px',
});

export const InputBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const InputTitle = styled(Typography)({
  margin: '40px 0 30px',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '29px',
  letterSpacing: 1,
  color: '#000',
});

export const InputTextArea = styled(TextareaAutosize)({
  width: '667px',
  minHeight: '168px',
  margin: 0,
  paddingLeft: '10px',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '28px',
  color: '#A2A2A2',
  border: '1px solid #00000033',
});
