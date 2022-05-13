import { styled, Box, Input, Button, RadioGroup, Radio, TextField } from '@mui/material';

import theme from 'themeSettings';

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
  width: '100%',
  margin: '20px 0',
  display: 'flex',
  justifyContent: 'space-between',
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
  marginTop: '14px',
  display: 'flex',
  flexDirection: 'column',
});

export const RadioButtonBox = styled(Box)({
  marginTop: '16px',
  display: 'inline-block',
});

export const RadioSelectAnswer = styled(Radio)({
  color: '#131313',
});

export const InputAnswer = styled(Input)({
  width: '234px',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18px',
  color: '#6C6C6C',
  borderBottom: '1px solid #C6C6C9',
  '&:after, &:before': {
    display: 'none',
  },
});

export const ButtonBox = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
});

export const QuestionActionButton = styled(Button)({
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

export const InputText = styled(Input)({
  width: '350px',
  height: '53px',
  paddingLeft: '12px',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18px',
  color: '#A2A2A2',
  backgroundColor: '#FFF',
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  borderRadius: '5px',
  '&::after, &::before': {
    display: 'none',
  },
  '&:hover': {
    borderColor: '#000',
  },
});

export const TestBasicField = styled(TextField)({
  width: '350px',
  height: '53px',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18x',
  color: '#A2A2A2',
  '& label, & label.Mui-focused': {
    color: '#A2A2A2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset, &:hover fieldset': {
      border: '1px solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
});

export const InputSelect = styled('select')({
  width: '350px',
  height: '53px',
  paddingLeft: '12px',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18x',
  color: '#A2A2A2',
  backgroundColor: '#FFF',
  border: '1px solid',
  borderColor: 'rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  borderRadius: '5px',
});
