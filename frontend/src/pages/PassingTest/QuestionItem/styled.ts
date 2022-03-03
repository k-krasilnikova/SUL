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
    [theme.breakpoints.down('xl')]: {
      fontSize: '18px !important',
      marginLeft: '24px',
      maxWidth: '447px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px !important',
      maxWidth: '258px',
      marginLeft: '8px',
    },
  },
});

export const QuestionAndStageBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('xl')]: {
    alignContent: 'flex-start',
  },
});

export const TestQuestion = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '24px !important',
  color: '#000000',
  [theme.breakpoints.down('xl')]: {
    fontSize: '22px !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
    color: '#131313',
  },
});

export const StageWrapper = styled(Box)({
  marginRight: '332px',
  [theme.breakpoints.down('xl')]: {
    marginRight: '190px !important',
    marginLeft: '146px !important',
  },
  [theme.breakpoints.down('md')]: {
    marginRight: '15vw !important',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '11px !important',
    marginLeft: '27px !important',
  },
});

export const Stage = styled(Typography)({
  fontSize: '18px !important',
  color: '#131313',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px !important',
  },
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
