import { Box, styled, TextField } from '@mui/material';

import Button from 'components/Button';
import { SectionName } from 'pages/CourseEditor/styled';
import theme from 'themeSettings';

export const SkillsText = styled(SectionName)({
  fontSize: '24px',
});

export const SkillWrapper = styled(Box)({
  width: '563px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '52px',
});

export const SkillField = styled(TextField)({
  width: '250px',
  height: '53px',
  '& label': {
    color: '#A2A2A2',
  },
  '&.MuiTextField-root > .MuiFormLabel-root.Mui-focused': {
    color: '#2C2525',
  },
});

export const SkillsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  maxWidth: '100%',
  [theme.breakpoints.down('xl')]: {
    flexDirection: 'column',
  },
});

export const SkillButton = styled(Button)({
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

export const InnerWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '28px',
});

export const SkillsTitleWrapper = styled(Box)({
  marginTop: '50px',
  marginBottom: '25px',
});

export const ButtonsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});
