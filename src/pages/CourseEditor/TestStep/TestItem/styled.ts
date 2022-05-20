import { styled, Box, RadioGroup, Radio, TextField } from '@mui/material';

export const TestItemWrapper = styled(Box)({
  width: '734px',
  margin: '32px 0 50px 0',
});

export const TestItemTitle = styled('p')({
  margin: 0,
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '31px',
  letterSpacing: 1,
  color: '#2C2525',
});

export const TestTitleBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  margin: '20px 0',
});

export const QuestionWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const QuestionTitle = styled('p')({
  margin: '20px 0 25px',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '29px',
  letterSpacing: 1,
  color: '#000',
});

export const QuestionInputBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const RadioButtonWrapper = styled(RadioGroup)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '14px',
});

export const RadioButtonBox = styled(Box)({
  display: 'inline-block',
  marginTop: '16px',
});

export const RadioSelectAnswer = styled(Radio)({
  color: '#131313',
});

export const InputAnswer = styled(TextField)({
  width: '80%',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18px',
  color: '#000000',
  // '&:after, &:before': {
  //   display: 'none',
  // },
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

export const TestBasicField = styled(TextField)({
  width: '350px',
  height: '53px',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18x',
  color: '#A2A2A2',
  '& label': {
    color: '#A2A2A2',
  },
});

export const FieldSelect = styled('select')({
  width: '350px',
  height: '53px',
  paddingLeft: '12px',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18x',
  color: '#A2A2A2',
  backgroundColor: '#FFF',
  border: '1px solid #00000033',
  boxSizing: 'border-box',
  borderRadius: '5px',
});
