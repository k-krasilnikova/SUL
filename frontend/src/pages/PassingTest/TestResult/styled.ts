import styled from 'styled-components';
import { Box } from '@mui/system';
import { Divider, Typography } from '@mui/material';

import Button from 'components/Button/Button';
import theme from 'themeSettings';

export const TestResultBox = styled(Box)({
  margin: '64px 332px 0 120px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    margin: '48px 7vw 0 48px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '32px 20px 0 16px',
  },
});

export const TitleBox = styled(Box)({
  [theme.breakpoints.down('xl')]: {
    marginRight: '39px',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '16px',
  },
});

export const TestResultTitle = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
  lineHeight: '38px',
  letterSpacing: '0 !important',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px !important',
    lineHeight: '24px',
  },
});

export const ProgressBarBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '32px !important',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '24px !important',
  },
});

export const TestResultText = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
  lineHeight: '38px',
  whiteSpace: 'nowrap',
  letterSpacing: '0 !!important',
  [theme.breakpoints.down('xl')]: {
    fontSize: '28px !important',
    lineHeight: '34px',
  },
  [theme.breakpoints.down(1124)]: {
    whiteSpace: 'normal',
  },
  [theme.breakpoints.down('lg')]: {
    marginRight: '5vw !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px !important',
    lineHeight: '22px',
  },
});

export const SkillsText = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '32px !important',
  color: '#131313',
  lineHeight: '38px',
  letterSpacing: '0 !!important',
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('xl')]: {
    fontSize: '26px !important',
    lineHeight: '31px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
    lineHeight: '19px',
  },
});

export const TestSkillsBox = styled(Box)({
  margin: '0 !important',
  [theme.breakpoints.down('sm')]: {
    marginTop: '16px !important',
  },
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '5vh !important',
  [theme.breakpoints.down('xl')]: {
    marginRight: '9vw !important',
  },
});

export const SubmitButton = styled(Button)({
  height: '50px',
  width: '103px',
  fontSize: '18px !important',
  padding: '14px 23px',
  [theme.breakpoints.down('sm')]: {
    height: '26px',
    width: '56px',
    fontSize: '14px !important',
    fontWeight: '500 !important',
  },
});

export const ContentBox = styled(Box)({
  display: 'flex',
  marginTop: '48px',
  marginBottom: '220px',
  [theme.breakpoints.down('xl')]: {
    marginTop: '66px',
    marginBottom: '112px',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    marginTop: '32px !important',
    marginBottom: '32px !important',
  },
});

export const ResultBox = styled(Box)({
  marginLeft: '148px',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '72px',
  },
  [theme.breakpoints.down(520)]: {
    marginLeft: '0 !important',
  },
});

export const AboutSkillsBox = styled(Box)({
  marginTop: '44px !important',
  marginBottom: '32px !important',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '26px !important',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '24px !important',
    marginBottom: '0 !important',
  },
});

export const FailedCourseText = styled(Typography)({
  fontSize: '32px !important',
  fontWeight: '400 !important',
  color: '#131313',
  [theme.breakpoints.down('xl')]: {
    fontSize: '24px !important',
  },
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
  marginTop: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  [theme.breakpoints.down('lg')]: {
    marginTop: '12px !important',
  },
});
