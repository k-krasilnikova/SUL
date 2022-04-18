import { styled, Box, FormControlLabel, Radio, Typography } from '@mui/material';

import theme from 'themeSettings';

export const StyledFormControlLabel = styled(FormControlLabel)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 0,
  marginBottom: '17px',
  '& .MuiFormControlLabel-label': {
    borderRadius: '4px',
    fontSize: '20px',
    fontStyle: 'normal',
    lineHeight: '24px',
    letterSpacing: 'normal',
    fontWeight: 400,
    maxWidth: '55vw',
    marginLeft: '28px',
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xl')]: {
      fontSize: '18px',
      marginLeft: '24px',
      maxWidth: '50vw',
    },
    [theme.breakpoints.down(1240)]: {
      maxWidth: '44vw',
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth: '30vw',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '66vw',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      maxWidth: '64vw',
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
  fontWeight: 500,
  fontSize: '24px',
  color: '#000000',
  [theme.breakpoints.down('xl')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    color: '#131313',
  },
});

export const StageWrapper = styled(Box)({
  marginRight: '332px',
  [theme.breakpoints.down('xl')]: {
    marginRight: '190px',
    marginLeft: '146px',
  },
  [theme.breakpoints.down('md')]: {
    marginRight: '5vw',
    marginLeft: '27px',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '11px',
  },
});

export const Stage = styled(Typography)({
  fontSize: '18px',
  color: '#131313',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});

export const AnswersBox = styled(Box)({
  marginTop: '25px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    marginRight: '15vw',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '11px',
  },
});

export const StyledRadio = styled(Radio)({
  display: 'flex',
  padding: 0,
  alignSelf: 'flex-start',
});

export const QuestionItemBox = styled(Box)({
  display: 'flex',
  marginLeft: '128px',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '88px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
});
