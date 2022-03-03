import styled from 'styled-components';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';

import Button from 'components/Button/Button';
import theme from 'themeSettings';

export const TestResultBox = styled(Box)({
  margin: '64px 332px 199px 120px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    margin: '32px 42px 0 16px',
  },
});

export const TitleBox = styled(Box)({
  [theme.breakpoints.down('sm')]: {
    marginLeft: '16px',
  },
});

export const TestResultTitle = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px !important',
  },
});

export const ProgressBarBox = styled(Box)({
  marginBottom: '56px',
  display: 'flex',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '24px !important',
  },
});

export const TestResultText = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px !important',
  },
});

export const SkillsText = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
  },
});

export const TestSkillsBox = styled(Box)({
  marginTop: '20px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '16px !important',
  },
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const SubmitButton = styled(Button)({
  height: '50px',
  width: '103px',
  fontSize: '18px !important',
  [theme.breakpoints.down('sm')]: {
    height: '26px',
    width: '56px',
    minWidth: '44px !important',
    fontSize: '14px !important',
    fontWeight: '500 !important',
  },
});

export const ContentBox = styled(Box)({
  display: 'flex',
  marginTop: '48px',
  marginBottom: '220px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '32px !important',
    marginBottom: '32px !important',
    flexDirection: 'column',
  },
});

export const ResultBox = styled(Box)({
  marginLeft: '148px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0 !important',
  },
});

export const AboutSkillsBox = styled(Box)({
  marginTop: '44px !important',
  marginBottom: '32px !important',
  [theme.breakpoints.down('sm')]: {
    marginTop: '24px !important',
    marginBottom: '0 !important',
  },
});

export const FailedCourseText = styled(Typography)({
  fontSize: '32px !important',
  fontWeight: '400 !important',
  color: '#131313',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
  },
});

export const StyledDivider = styled(Divider)({
  borderColor: '#C6C6C9',
  width: '112px',
});

export const SkillsInfoList = styled(Box)({
  padding: '0',
});
