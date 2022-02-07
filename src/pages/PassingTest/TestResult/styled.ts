import styled from 'styled-components';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';

import Button from 'components/Button/Button';

export const TestResultBox = styled(Box)({
  margin: '64px 332px 199px 120px',
  display: 'flex',
  flexDirection: 'column',
});

export const TestResultTitle = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
});

export const ProgressBarBox = styled(Box)({
  marginBottom: '56px',
  display: 'flex',
  justifyContent: 'flex-start',
});

export const TestResultText = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
});

export const SkillsText = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
});

export const TestSkillsBox = styled(Box)({
  marginTop: '20px',
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const SubmitButton = styled(Button)({
  height: '50px',
  width: '103px',
  fontSize: '18px !important',
});

export const ContentBox = styled(Box)({
  display: 'flex',
  marginTop: '48px',
  marginBottom: '220px',
});

export const ResultBox = styled(Box)({
  marginLeft: '148px',
});

export const AboutSkillsBox = styled(Box)({
  marginTop: '44px !important',
  marginBottom: '32px !important',
});

export const FailedCourseText = styled(Typography)({
  fontSize: '32px !important',
  fontWeight: '400 !important',
  color: '#131313',
});

export const StyledDivider = styled(Divider)({
  borderColor: '#C6C6C9',
  width: '112px',
});
