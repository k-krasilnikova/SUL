import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Grid, Typography, Button as TextButton } from '@mui/material';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const DetailedCourseWrapper = styled(Box)({
  [theme.breakpoints.up('md')]: {
    margin: '25px 0 25px 21px',
    width: 'calc(100% - 21px)',
  },
  [theme.breakpoints.up('xl')]: {
    margin: '40px 0 40px 40px',
    width: 'calc(100% - 40px)',
  },
});

export const ImageWrapper = styled('div')({
  float: 'left',
  width: '479px',
  height: '268px',
  margin: '0 30px 30px 0',
  overflow: 'hidden',
  borderRadius: '10px',
  [theme.breakpoints.up('xs')]: {
    width: '64px',
    height: '46px',
    margin: '0px 8px 5px 0px',
    borderRadius: '0px',
  },
  [theme.breakpoints.up('md')]: {
    width: '281px',
    height: '147px',
    margin: '5px 25px 105px 0',
    borderRadius: '8px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '479px',
    height: '268px',
    margin: '0 30px 30px 0',
    borderRadius: '10px',
  },
});

export const InnerWrapper = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    margin: '8px',
    maxWidth: '98%',
  },
  [theme.breakpoints.up('md')]: {
    margin: '14px 30px 0px 27px',
    maxWidth: '847px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '29px 40px 0px 27px',
    maxWidth: 'calc(100% - 54px)',
  },
  [theme.breakpoints.up('xl')]: {
    margin: '2%',
    maxWidth: '85%',
  },
});

export const DetailedCourseText = styled(Typography)({
  fontWeight: 'normal',
  letterSpacing: '-0.4px',
  color: '#131313',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    fontSize: '18px!important',
    lineHeight: '28px',
    clear: 'none',
    padding: '0px',
  },
  [theme.breakpoints.up('lg')]: {
    lineHeight: '28px !important',
    marginRight: '100px !important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px !important',
    lineHeight: '37px !important',
    marginRight: '0px !important',
  },
});

export const DetailedCourseTitle = styled(Typography)({
  fontWeight: '700 !important',
  letterSpacing: '-0.4px !important',
  color: '#2c2525',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px !important',
    lineHeight: '28px !important',
    paddingTop: '10px !important',
    marginBottom: '10px !important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '28px !important',
    lineHeight: '28px !important',
    marginBottom: '24px !important',
    paddingTop: '0px !important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '28px !important',
    lineHeight: '28px !important',
    marginBottom: '13px !important',
  },
});

export const DetailedCourseActionsBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '50px',
  [theme.breakpoints.up('xs')]: {
    display: 'block',
    marginTop: '24px',
    marginLeft: '3px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '56px',
    marginLeft: '0',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '60vw',
  },
});

export const SimilarCoursesWrapper = styled(Grid)({
  marginTop: '50px',
  marginBottom: '50px',
  [theme.breakpoints.up('xs')]: {
    marginTop: '48px',
    marginBottom: '10px',
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '63px',
    marginBottom: '40px',
  },
});

export const SimilarCoursesItemWrapper = styled(Grid)({
  width: '711px',
  marginTop: '40px',
  [theme.breakpoints.up('xs')]: {
    marginTop: '8px',
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '500px',
    marginTop: '16px',
    maxHeight: '254px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '711px',
    marginTop: '40px',
    maxHeight: '361px',
  },
});

export const SimilarCoursesTitle = styled(Typography)({
  fontWeight: 'bold !important',
  color: '#2C2525',
  letterSpacing: '-0.4px !important',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px !important',
    lineHeight: '21px !important',
    marginLeft: '8px!important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px !important',
    lineHeight: '24px !important',
    marginLeft: '0px!important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '24px !important',
    lineHeight: '52px !important',
  },
});

export const BackButton = styled(Button)({
  height: '39px',
  width: '84px',
  fontSize: '16px !important',
  [theme.breakpoints.down('lg')]: {
    display: 'inline-flex!important',
    height: '32px',
    width: '64px',
    fontSize: '12px !important',
    marginBottom: '15px !important',
  },
  '@media(min-width: 1110px)': {
    marginBottom: '0 !important',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none !important',
  },
});

// export const StartButton = styled(Button)({
//   height: '50px',
//   width: '150px',
//   fontSize: '16px !important',
//   fontWeight: '700 !important',
//   padding: '0 !important',
//   [theme.breakpoints.down('xl')]: {
//     margin: '0 50px 0 calc(100% - 162px) !important',
//   },
//   [theme.breakpoints.down('lg')]: {
//     fontSize: '12px !important',
//     height: '37px',
//     width: '112px',
//     padding: '4px 5px !important',
//     margin: '0 20px 0 calc(100% - 132px) !important',
//   },
//   [theme.breakpoints.down('md')]: {
//     height: '44px',
//     width: '131px',
//     lineHeight: '19px',
//     fontSize: '14px!important',
//     padding: '10px !important',
//     margin: '24px 18px 0 calc(100% - 156px) !important',
//   },
// });

// export const ContinueTestButton = styled(Button)({
//   height: '50px',
//   width: '150px',
//   fontSize: '16px !important',
//   fontWeight: '700 !important',
//   padding: '4px 5px !important',
//   [theme.breakpoints.down('xl')]: {
//     margin: '0 50px 0 calc(100% - 162px) !important',
//   },
//   [theme.breakpoints.down('lg')]: {
//     fontSize: '12px !important',
//     height: '37px',
//     width: '112px',
//     padding: '4px 5px !important',
//     margin: '0 20px 0 calc(100% - 132px) !important',
//   },
//   [theme.breakpoints.down('md')]: {
//     height: '44px',
//     width: '131px',
//     lineHeight: '19px',
//     fontSize: '14px!important',
//     padding: '10px !important',
//     margin: '24px 18px 0 calc(100% - 156px) !important',
//   },
// });

// export const DetailsButton = styled(Button)({
//   height: '50px',
//   width: '150px',
//   marginRight: '16px !important',
//   fontSize: '16px !important',
//   [theme.breakpoints.down('lg')]: {
//     height: '35px',
//     width: '105px',
//     fontSize: '12px !important',
//     padding: '4px 5px!important',
//   },
// });

export const CourseActionsBox = styled(Box)({
  marginLeft: '16px !important',
});

export const CourseInfoBox = styled(Box)({
  display: 'flex',
  alignSelf: 'center !important',
  alignItems: 'center',
});

export const DetailedCourseTextMobile = styled(Typography)({
  fontWeight: 'normal',
  letterSpacing: '-0.4px',
  color: '#131313',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: '25px',
    clear: 'both',
    padding: '0px 24px 0px 8px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
});

export const ButtonFullText = styled(TextButton)({
  fontFamily: '"Ubuntu", sans-serif',
  fontStyle: 'normal',
  fontWeight: '400 !important',
  fontSize: '16px !important',
  lineHeight: '130%',
  display: 'block!important',
  color: '#0A5EDC !important',
  padding: '0px !important',
});

export const BackArrow = styled('img')({
  [theme.breakpoints.up('xs')]: {
    display: 'inline-block',
    margin: '16px 23px 5px 16px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
});
export const BackLink = styled(Link)({
  [theme.breakpoints.up('xs')]: {
    height: 'fit-content',
    width: 'fit-content',
  },
});
export const MobileSearchWrapper = styled('div')({
  width: 'calc(100% - 56px)',
  margin: '16px 0px 8px 0px',
  height: '30px',
  display: 'inline-block',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    margin: '0px 0px 0px 6px',
    width: 'calc(100% - 80px)',
  },
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
});
