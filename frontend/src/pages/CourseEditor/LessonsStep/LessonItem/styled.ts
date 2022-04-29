import { styled, Box, Input } from '@mui/material';

export const LessonItemWrapper = styled(Box)({});

export const LessonItemTitle = styled('p')({
  margin: '32px 0 0 0',
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

export const VideoInput = styled(Input)({
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
