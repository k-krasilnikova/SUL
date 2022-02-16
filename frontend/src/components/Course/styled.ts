import styled from 'styled-components';
import { Typography, Box, Grid } from '@mui/material';

import theme from 'themeSettings';

interface InfoContainerTypes {
  color?: string;
  fontSize?: number;
  lineHeight?: number;
  type?: string;
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
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export const AboutCourseContainer = styled('div')<InfoContainerTypes>(({ type }) => ({
  textOverflow: 'ellipse',
  overflow: 'hidden',
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
    padding: '8px 8px 10px 8px',
    height: '82px',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    padding: '10px 15px 10px 10px',
    minHeight: '130px',
    height: 'content-fit',
  },
  [theme.breakpoints.up('md')]: {
    padding: '16px 26px 16px 16px',
    minHeight: '194px',
    ...(type === 'similarCourses' && {
      padding: '16px 32px 26px 16px',
      minHeight: '207px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 0 16px 16px',
    minHeight: '295px',
  },
}));

export const ButtonsContainer = styled('div')<InfoContainerTypes>(({ type }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '16px',
    ...(type === 'similarCourses' && {
      justifyContent: 'end',
    }),
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
}));

export const ImageWrapper = styled('div')({
  float: 'left',
  margin: '0px 8px 0px 0px',
  overflow: 'hidden',
  [theme.breakpoints.up('xs')]: {
    flexShrink: '0',
    width: '72px',
    height: '46px',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '8px 8px 28px 0px',
    borderRadius: '4px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '180px',
    height: '100px',
    margin: '0px 14px 4px 0px',
    borderRadius: '8px',
  },
  [theme.breakpoints.up('md')]: {
    width: '224px',
    height: '124px',
    margin: '0px 24px 4px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '346px',
    height: '191px',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '0px 24px 16px 0px',
    borderRadius: '10px',
  },
});

export const CourseTitle = styled('p')<InfoContainerTypes>(({ type }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '-0.4px',
    textAlign: 'left',
    padding: '0px',
    margin: '0px 14px 8px 0px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '22px',
    margin: '9px 38px 16px 0px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
    lineHeight: '31px',
    ...(type === 'similarCourses' && {
      margin: '0px 0px 9px 0px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    fontWeight: '500',
    margin: '15px 31px 16px 0px',
  },
  fontFamily: '"Ubuntu", sans-serif',
  color: ' #2C2525',
}));

export const CourseDescription = styled('p')<InfoContainerTypes>(
  ({ fontSize, lineHeight, type }) => ({
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '22px',
      letterSpacing: '-0.4px !important',
      textAlign: 'left',
      padding: '0px',
      margin: '0px 35px 9px 7px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
      lineHeight: '27px',
      ...(type === 'similarCourses' && {
        margin: '0px 0px 9px 0px',
        lineHeight: '21px',
        fontSize: '16px',
      }),
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
  }),
);

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
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px',
    letterSpacing: '-0.4px',
    textAlign: 'left',
  },
  verticalAlign: 'middle',
  color: theme.palette.text.primary,
  fontSize: '14px !important',
});

export const InfoItemTextBox = styled(Box)({
  marginLeft: '8px',
});

export const CourseDescriptionWrapper = styled(Box)<InfoContainerTypes>(({ type }) => ({
  margin: '0px 45px 14px 16px',
  [theme.breakpoints.up('md')]: {
    ...(type === 'similarCourses' && {
      margin: '0px 0px 9px 0px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    margin: '0px 45px 14px 16px',
  },
}));

export const CourseInfoBox = styled(Box)<InfoContainerTypes>(({ type }) => ({
  [theme.breakpoints.up('md')]: {
    display: type === 'similarCourses' ? 'none' : 'bllock',
  },
  [theme.breakpoints.up('xl')]: {
    display: 'block',
  },
  paddingLeft: '30px !important',
  paddingBottom: '7px !important',
}));
