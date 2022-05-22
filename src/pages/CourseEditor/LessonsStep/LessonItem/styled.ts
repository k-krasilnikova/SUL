import { styled, Box, TextField, TextareaAutosize } from '@mui/material';

import { SectionName } from 'pages/CourseEditor/DefinitionStep/styled';

export const LessonItemWrapper = styled(Box)({
  margin: '32px 0 28px',
});

export const ItemTitle = styled(SectionName)({
  fontSize: '24px',
});

export const LessonInnerBox = styled(Box)({
  marginTop: '30px',
});

export const FieldSelect = styled('select')({
  width: '350px',
  height: '53px',
  paddingLeft: '12px',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18x',
  color: '#000',
  backgroundColor: '#FFF',
  border: '1px solid #00000033',
  borderRadius: '5px',
});

export const InputBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const InputLabel = styled('label')({
  margin: '40px 0 30px',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '29px',
  letterSpacing: 1,
  color: '#000',
});

export const InputText = styled(TextField)({
  width: '350px',
  height: '53px',
  fontWight: 400,
  fontSize: '12px',
  lineHeight: '21px',
  color: '#000',
  backgroundColor: '#FFF',
  borderRadius: '5px',
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
