import styled from 'styled-components';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const DetailedCourseWrapper = styled(Box)({
  margin: '40px 0 40px 40px',
});

export const ImageWrapper = styled('div')({
  float: 'left',
  width: '479px',
  height: '268px',
  margin: '0 30px 30px 0',
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
  letterSpacing: '-0.4px',
  color: '#131313',
  [theme.breakpoints.up('xs')]: {
    fontSize: '18px',
    lineHeight: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
    lineHeight: '35px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px !important',
    lineHeight: '37px !important',
    letterSpacing: '-0.4px !important',
  },
});

export const DetailedCourseTitle = styled(Typography)({
  fontSize: '42px !important',
  fontWeight: 'bold !important',
  lineHeight: '55px !important',
  letterSpacing: '-0.4px !important',
  marginBottom: '13px !important',
  color: '#2c2525',
});

export const DetailedCourseActionsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '171px',
});

export const SimilarCoursesWrapper = styled(Grid)({
  marginTop: '156px',
  marginBottom: '171px',
});

export const SimilarCoursesItemWrapper = styled(Grid)({
  width: '711px',
  marginTop: '40px',
});

export const SimilarCoursesTitle = styled(Typography)({
  fontSize: '40px !important',
  fontWeight: 'bold !important',
  color: '#2C2525',
  lineHeight: '52px !important',
  letterSpacing: '-0.4px !important',
});

export const BackButton = styled(Button)({
  height: '39px',
  width: '84px',
});

export const StartButton = styled(Button)({
  height: '50px',
  width: '150px',
});

export const DetailsButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '16px !important',
});

export const StartCourseButton = styled(Button)({
  height: '50px',
  width: '150px',
  marginRight: '40px !important',
});

export const CourseActionsBox = styled(Box)({
  marginLeft: '16px !important',
});
