import styled from 'styled-components';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import theme from 'themeSettings';
import { CircularProgressbar } from 'react-circular-progressbar';

export const DetailedCourseWrapper = styled(Box)({
  margin: '40px 0 40px 40px',
});

export const ProgressBarBox = styled(Box)({
  float: 'right',
  width: '141px',
  height: '141px',
  margin: '5%',
});

export const ImageWrapper = styled('div')({
  float: 'left',
  width: '460px',
  height: '268px',
  margin: '40px 5px 50px 0',
  overflow: 'hidden',
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '0px',
    width: '100%',
  },
});

export const InnerWrapper = styled(Box)({
  margin: '2%',
  maxWidth: '85%',
});

export const DetailedCourseText = styled(Typography)({
  fontWeight: 'normal',
  letterSpacing: '-0.41px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '18px',
    lineHeight: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
    lineHeight: '35px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
    lineHeight: '37px',
  },
});

export const DetailedCourseTitle = styled(Typography)({
  fontSize: '42px',
  fontWeight: 'bold',
  minWidth: '100px',
  lineHeight: '34px',
  marginBottom: '13px',
  marginTop: '20px',
});

export const DetailedCourseActionsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10%',
});

export const StyledCircularProgressbar = styled(CircularProgressbar)({
  textColor: '#f88',
});
