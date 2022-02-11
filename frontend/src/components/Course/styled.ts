import styled from 'styled-components';
import { Typography, Box, Grid } from '@mui/material';

import theme from 'themeSettings';

interface InfoContainerTypes {
  color?: string;
  fontSize?: number;
  lineHeight?: number;
}

export const CourseContainer = styled(Grid)({
  backgroundColor: 'rgba(118, 118, 128, 0.12);',
  borderRadius: '16px',
  fontFamily: '"Ubuntu", sans-serif',
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
  minHeight: '100%',
});

export const AboutCourseContainer = styled('div')({
  textOverflow: 'ellipse',
  overflow: 'hidden',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'fit-content',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '16px 26px 16px 16px',
    minHeight: '194px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 0 16px 16px',
    minHeight: '295px',
  },
});

export const ButtonsContainer = styled('div')({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-between',
    paddingBottom: '16px',
  },
  [theme.breakpoints.up('xl')]: {
    justifyContent: 'space-between',
  },
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  height: 'fit-content',
  width: '100%',
  fontSize: '12px',
  justifyContent: 'space-between',
});

export const ImageWrapper = styled('div')({
  float: 'left',
  margin: '0px 8px 0px 0px',
  overflow: 'hidden',
  borderRadius: '10px',
  [theme.breakpoints.up('lg')]: {
    width: '224px',
    height: '124px',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '0px 24px 4px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '346px',
    height: '191px',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '0px 24px 16px 0px',
  },
});

export const CourseTitle = styled('p')({
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '31px',
    letterSpacing: '-0.4px',
    textAlign: 'left',
    padding: '0px',
    margin: '9px 38px 16px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    fontWeight: '500',
    margin: '15px 31px 16px 0px',
  },
  fontFamily: '"Ubuntu", sans-serif',
  color: ' #2C2525',
});

export const CourseDescription = styled('p')<InfoContainerTypes>(({ fontSize, lineHeight }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    lineHeight: '22px',
    padding: '5px',
    ...(fontSize && {
      fontSize: `${fontSize}px`,
    }),
    ...(lineHeight && {
      lineHeight: `${lineHeight}px`,
    }),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '27px',
    letterSpacing: '-0.4px !important',
    textAlign: 'left',
    padding: '0px',
    margin: '0px 35px 9px 7px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '16px',
    lineHeight: '21px',
    ...(fontSize && {
      fontSize: `${fontSize}px`,
    }),
    ...(lineHeight && {
      lineHeight: `${lineHeight}px`,
    }),
    padding: '0px',
    margin: '0px',
  },
  color: '#131313',
  fontFamily: '"Ubuntu", sans-serif',
  ...(fontSize && {
    fontSize: `${fontSize}px`,
  }),
  ...(lineHeight && {
    lineHeight: `${lineHeight}px`,
  }),
}));

export const InfoContainer = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    margin: '0px',
    height: '100%',
    padding: '0px',
    flexDirection: 'row',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0px',
    height: '100%',
    flexDirection: 'row',
  },
  height: 'fit-content',
  display: 'flex',
  alignItems: 'end',
  alignSelf: 'end',
});

export const InfoItem = styled('div')({
  [theme.breakpoints.up('xs')]: {
    padding: '5px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0px',
  },
  display: 'inline-flex',
  verticalAlign: 'middle',
  color: 'black',
});
export const InfoItemText = styled(Typography)({
  [theme.breakpoints.up('xs')]: {
    width: '70px',
    padding: '5px',
    fontSize: '8px',
    lineHeight: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '90px',
    padding: '0px',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '10px',
    fontWeight: '400',
    lineHeight: '14px',
    letterSpacing: '-0.4px',
    textAlign: 'left',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '14px',
    lineHeight: '18px',
  },
  verticalAlign: 'middle',
  color: theme.palette.text.primary,
  fontSize: '14px !important',
});

export const InfoItemTextBox = styled(Box)({
  marginLeft: '8px',
});

export const CourseDescriptionWrapper = styled(Box)({
  margin: '0px 45px 14px 16px',
});

export const CourseInfoBox = styled(Box)({
  paddingLeft: '30px !important',
  paddingBottom: '7px !important',
});
