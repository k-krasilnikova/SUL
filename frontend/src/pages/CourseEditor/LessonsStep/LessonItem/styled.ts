import { styled, Box, Input } from '@mui/material';

export const LessonItemWrapper = styled(Box)({
  margin: '32px 0 50px 0',
});

export const LessonItemTitle = styled('p')({
  margin: '0',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '31px',
  letterSpacing: 1,
  color: '#2C2525',
});

export const LessonInput = styled(Box)({
  margin: '30px 0',
});

export const InputSelect = styled('select')({
  width: '350px',
  height: '53px',
  paddingLeft: '12px',
  fontWight: 400,
  fontSize: '18px',
  lineHeight: '21px',
  color: '#000',
  backgroundColor: '#FFF',
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  borderRadius: '5px',
});

export const SelectItem = styled('option')({});

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

export const InputText = styled(Input)({
  width: '350px',
  height: '53px',
  paddingLeft: '12px',
  fontWight: 400,
  fontSize: '12px',
  lineHeight: '21px',
  color: '#000',
  backgroundColor: '#FFF',
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  borderRadius: '5px',
});

export const InputTextArea = styled('textarea')({
  width: '667px',
  height: '168px',
  margin: '20px 0',
  fontWight: 400,
  fontSize: '18px',
  lineHeight: '21px',
  color: '#A2A2A2',
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.2)',
});
