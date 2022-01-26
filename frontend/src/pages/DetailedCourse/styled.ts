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
  margin: '0 20px 30px 0',
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
  fontSize: '42px !important',
  fontWeight: 'bold !important',
  lineHeight: '55px',
  marginBottom: '13px',
  color: '#2c2525',
});

export const DetailedCourseActionsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '171px',
});

export const StyledButton = styled(Button)({
  marginLeft: '15px',
});

export const SimilarCoursesWrapper = styled(Grid)({
  marginTop: '171px',
  marginBottom: '171px',
});

export const SimilarCoursesItemWrapper = styled(Grid)({
  height: '300px',
  width: '600px',
});

export const SimilarCoursesTitle = styled(Typography)({
  fontSize: '40px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

export const BackButton = styled(Button)({
  height: '39px',
  width: '84px',
  borderRadius: '4px',
  fontSize: '16px !important',
  fontWeight: '500',
  lineHeight: '22px',
  letterSpacing: '-0.4px',
  textAlign: 'center',
  boxShadow: 'none !important',
  backgroundColor: '#d43e41 !important',
});

export const StartButton = styled(Button)({
  height: '50px',
  width: '155px',
  borderRadius: '4px',
  fontSize: '16px !important',
  fontWeight: 'bold',
  lineHeight: '22px',
  letterSpacing: '-0.4px',
  boxShadow: 'none !important',
  backgroundColor: '#d43e41 !important',
});
