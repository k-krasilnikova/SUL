import styled from 'styled-components';
import { FormControlLabel, Radio, Typography } from '@mui/material';
import { Box } from '@mui/system';

import theme from 'themeSettings';

export const StyledFormControlLabel = styled(FormControlLabel)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '0 !important',
  marginBottom: '17px',
  '& .MuiFormControlLabel-label': {
    borderRadius: '4px',
    fontSize: '20px !important',
    fontStyle: 'normal !important',
    lineHeight: '24px !important',
    letterSpacing: 'normal',
    fontWeight: '400 !important',
    maxWidth: '501px',
    marginLeft: '28px',
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
  },
});

export const QuestionAndStageBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const TestQuestion = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '24px !important',
  color: '#000000',
});

export const StageWrapper = styled(Box)({
  marginRight: '332px',
});

export const Stage = styled(Typography)({
  fontSize: '18px !important',
  color: '#131313',
});

export const AnswersBox = styled(Box)({
  marginTop: '25px !important',
  display: 'flex',
  flexDirection: 'column',
});

export const StyledRadio = styled(Radio)({
  display: 'flex',
  padding: '0 !important',
  alignSelf: 'flex-start',
});
