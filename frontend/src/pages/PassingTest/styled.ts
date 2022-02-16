import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

import { Button } from 'components/Button';

export const PassingTestWrapper = styled(Box)({
  width: '100%',
  padding: '40px',
});

export const TitleBox = styled(Box)({
  display: 'flex',
  marginLeft: '40px',
  flexDirection: 'row',
});

export const InnerWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '61px',
});

export const BackButton = styled(Button)({
  height: '40px',
  width: '85px',
});

export const CourseTestTitle = styled(Typography)({
  fontWeight: '700 !important',
  fontSize: '36px !important',
  color: '#2C2525',
});

export const CountDownText = styled(Typography)({
  marginLeft: '48px !important',
  fontWeight: '500 !important',
  fontSize: '22px !important',
  color: '#131313',
  display: 'flex',
  alignSelf: 'center',
});

export const QuestionItemBox = styled(Box)({
  display: 'flex',
  marginLeft: '128px',
  flexDirection: 'column',
});

export const ButtonsBox = styled(Box)({
  marginTop: '103px',
  marginRight: '333px',
  marginLeft: '125px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const ResultButton = styled(Button)({
  height: '50px',
  width: '98px',
  fontSize: '18px !important',
  fontWeight: '500 !important',
  '&.MuiButton-root.Mui-disabled': {
    backgroundColor: '#E19697',
    color: '#ffffff',
  },
});

export const NextButton = styled(Button)({
  height: '50px',
  width: '86px',
  fontSize: '18px !important',
  fontWeight: '500 !important',
  '&:disabled': {
    backgroundColor: '#E19697',
    color: '#ffffff !important',
  },
});

export const PreviousButton = styled(Button)({
  width: '116px',
  height: '50px',
  fontSize: '18px !important',
  fontWeight: '500 !important',
});
