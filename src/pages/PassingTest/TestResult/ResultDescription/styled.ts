import { styled, Box, Divider, Typography } from '@mui/material';

import theme from 'themeSettings';

export const TestResultText = styled(Typography)({
  fontWeight: 500,
  fontSize: '32px',
  color: '#131313',
  lineHeight: '38px',
  whiteSpace: 'nowrap',
  letterSpacing: 0,
  [theme.breakpoints.down('xl')]: {
    fontSize: '28px',
    lineHeight: '34px',
  },
  [theme.breakpoints.down(1124)]: {
    whiteSpace: 'normal',
  },
  [theme.breakpoints.down('lg')]: {
    marginRight: '5vw',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    lineHeight: '22px',
  },
});

export const SkillsText = styled(Typography)({
  fontWeight: 500,
  fontSize: '32px',
  color: '#131313',
  lineHeight: '38px',
  letterSpacing: 0,
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('xl')]: {
    fontSize: '26px',
    lineHeight: '31px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '19px',
  },
});

export const TestSkillsBox = styled(Box)({
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    marginTop: '16px',
  },
});

export const ResultBox = styled(Box)({
  marginLeft: '148px',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '72px',
  },
  [theme.breakpoints.down(520)]: {
    marginLeft: 0,
  },
});

export const AboutSkillsBox = styled(Box)({
  marginTop: '44px',
  marginBottom: '32px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '26px',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '24px',
    marginBottom: 0,
  },
});

export const FailedCourseText = styled(Typography)({
  fontSize: '32px',
  fontWeight: 400,
  color: '#131313',
  [theme.breakpoints.down('xl')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
});

export const StyledDivider = styled(Divider)({
  borderColor: '#c6c6c9',
  width: '112px',
});

export const SkillsInfoList = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  marginTop: '20px',
  padding: 0,
  [theme.breakpoints.down('lg')]: {
    gap: '12px',
    marginTop: '12px',
  },
});
