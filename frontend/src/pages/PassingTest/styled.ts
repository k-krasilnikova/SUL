import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

import { Button } from 'components/Button';
import theme from 'themeSettings';

export const PassingTestWrapper = styled(Box)({
  width: '100%',
  padding: '40px',
  [theme.breakpoints.down('xl')]: {
    padding: '16px',
  },
});

export const TitleBox = styled(Box)({
  display: 'flex',
  marginLeft: '40px',
  flexDirection: 'row',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '24px',
  },
  [theme.breakpoints.down('lg')]: {
    marginLeft: '18px',
  },
  [theme.breakpoints.down(880)]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '12px',
  },
});

export const InnerWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '61px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '53px',
  },
  [theme.breakpoints.down('lg')]: {
    marginBottom: '44px',
  },
  [theme.breakpoints.down(880)]: {
    alignItems: 'baseline',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '35px',
  },
});

export const BackButton = styled(Button)({
  height: '40px',
  width: '85px',
  [theme.breakpoints.down('xl')]: {
    height: '32px',
    width: '64px',
    padding: '0 !important',
    fontSize: '12px !important',
    fontWeight: '500 !important',
  },
  [theme.breakpoints.down('sm')]: {
    height: '20px',
    width: '40px',
    minWidth: '40px !important',
    fontSize: '10px !important',
    fontWeight: '400 !important',
  },
});

export const CourseTestTitle = styled(Typography)({
  fontWeight: '700 !important',
  fontSize: '36px !important',
  color: '#2C2525',
  [theme.breakpoints.down('xl')]: {
    fontSize: '32px !important',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '26px !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: '500 !important',
    fontSize: '20px !important',
  },
});

export const CountDownText = styled(Typography)({
  marginLeft: '48px !important',
  fontWeight: '500 !important',
  fontSize: '22px !important',
  color: '#131313',
  display: 'flex',
  alignSelf: 'center',
  [theme.breakpoints.down('xl')]: {
    fontWeight: '500 !important',
    fontSize: '20px !important',
    alignSelf: 'flex-end',
    paddingBottom: '3px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px !important',
  },
  [theme.breakpoints.down(880)]: {
    alignSelf: 'flex-start',
    marginLeft: '0 !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: '400 !important',
    fontSize: '14px !important',
  },
});

export const QuestionItemBox = styled(Box)({
  display: 'flex',
  marginLeft: '128px',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '88px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0',
  },
});

export const ButtonsBox = styled(Box)({
  marginTop: '103px',
  marginRight: '333px',
  marginLeft: '125px',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('xl')]: {
    marginTop: '78px',
    marginRight: '190px',
    marginLeft: '88px',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '28px',
    marginRight: '5vw !important',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '11px !important',
    marginLeft: '0',
  },
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
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px !important',
    padding: '0 !important',
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
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px !important',
    padding: '0 !important',
  },
});

export const PreviousButton = styled(Button)({
  width: '116px',
  height: '50px',
  fontSize: '18px !important',
  fontWeight: '500 !important',
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px !important',
    padding: '0 !important',
  },
});
