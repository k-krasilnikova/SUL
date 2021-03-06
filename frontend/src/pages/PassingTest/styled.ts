import { styled, Box, Typography } from '@mui/material';

import Button from 'components/Button';
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
    padding: 0,
    fontSize: '14px',
    fontWeight: 500,
  },
  [theme.breakpoints.down('sm')]: {
    height: '20px',
    width: '40px',
    minWidth: '40px',
    fontSize: '10px',
    fontWeight: 400,
  },
});

export const CourseTestTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: '36px',
  color: '#2C2525',
  [theme.breakpoints.down('xl')]: {
    fontSize: '32px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '26px',
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: 500,
    fontSize: '20px',
  },
});

export const CountDownText = styled(Typography)({
  marginLeft: '48px',
  fontWeight: 500,
  fontSize: '22px',
  color: '#131313',
  display: 'flex',
  alignSelf: 'center',
  [theme.breakpoints.down('xl')]: {
    fontWeight: 500,
    fontSize: '20px',
    alignSelf: 'flex-end',
    paddingBottom: '3px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down(880)]: {
    alignSelf: 'flex-start',
    marginLeft: 0,
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: 400,
    fontSize: '14px',
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
    marginLeft: 0,
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
    marginRight: '5vw',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '11px',
    marginLeft: 0,
  },
});

export const ResultButton = styled(Button)({
  height: '50px',
  width: '98px',
  fontSize: '18px',
  fontWeight: 500,
  '&.MuiButton-root.Mui-disabled': {
    backgroundColor: '#E19697',
    color: '#FFF',
  },
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
    padding: 0,
  },
});

export const NextButton = styled(Button)({
  height: '50px',
  width: '86px',
  fontSize: '18px',
  fontWeight: 500,
  '&:disabled': {
    backgroundColor: '#E19697',
    color: '#FFF',
  },
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
    padding: 0,
  },
});

export const PreviousButton = styled(Button)({
  width: '116px',
  height: '50px',
  fontSize: '18px',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    height: '32px',
    width: '64px',
    fontSize: '14px',
    padding: 0,
  },
});
