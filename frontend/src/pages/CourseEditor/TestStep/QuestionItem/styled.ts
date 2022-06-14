import { styled, Box, Radio, TextField, RadioGroup, FormControlLabel } from '@mui/material';

import { SectionName } from 'pages/CourseEditor/styled';
import { SkillButton } from 'pages/CourseEditor/SkillsStep/styled';

export const TestItemWrapper = styled(Box)({
  width: '734px',
  margin: '32px 0 28px',
});

export const ItemTitle = styled(SectionName)({
  margin: '40px 0 30px',
  fontSize: '24px',
});

export const TestTitleBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const QuestionWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: '40px 0',
});

export const QuestionTitle = styled(Box)({
  margin: '0 0 25px',
  fontWeight: 400,
  fontSize: '22px',
  lineHeight: '29px',
  letterSpacing: 1,
  color: '#000',
});

export const QuestionInputBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  '& .MuiFormHelperText-root': {
    marginRight: 0,
  },
});

export const RadioButtonBox = styled(RadioGroup)({
  margin: '16px 0 16px',
});

export const RadioSelectAnswer = styled(Radio)({
  color: '#131313',
});

export const RadioControlLabel = styled(FormControlLabel)({
  '& .MuiTypography-root': {
    width: '80%',
  },
});

export const InputAnswer = styled(TextField)({
  width: '80%',
  fontWight: 400,
  fontSize: '16px',
  lineHeight: '18px',
  color: '#000000',
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

export const AddRemoveAnswerButton = styled(SkillButton)({
  width: '50px',
  height: '50px',
  border: 'none',
});

export const ButtonsWrapper = styled(Box)({
  display: 'flex',
  alignSelf: 'start',
  marginTop: '10px',
});
