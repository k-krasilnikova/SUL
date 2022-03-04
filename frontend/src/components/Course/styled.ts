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
  fontFamily: '"Ubuntu", sans-serif',
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
  minHeight: '100%',
  borderRadius: '16px',
  [theme.breakpoints.down('xl')]: {
    borderRadius: '11px',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '4px',
    width: '100%',
  },
});

export const AboutCourseContainer = styled('div')<InfoContainerTypes>(({ type }) => ({
  textOverflow: 'ellipse',
  overflow: 'hidden',
  width: '100%',
  padding: '16px 0 16px 16px',
  minHeight: '295px',
  maxHeight: '295px',
  [theme.breakpoints.down('xl')]: {
    minHeight: '194px',
    maxHeight: '194px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '16px 26px 16px 16px',
    minHeight: '194px',
    ...(type === 'similarCourses' && {
      minHeight: '207px',
    }),
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '10px 15px 10px 10px',
    minHeight: '130px',
    height: 'content-fit',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
    padding: '8px 8px 10px 8px',
    minHeight: '82px',
    height: '82px',
  },
}));

export const CourseTextContainer = styled('div')({
  flexGrow: '2',
});

export const ButtonsContainer = styled('div')<InfoContainerTypes>(({ type }) => ({
  [theme.breakpoints.down('xl')]: {
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'space-between',
    ...(type === 'similarCourses' && {
      justifyContent: 'space-between',
    }),
    paddingBottom: '10px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    paddingBottom: '10px',
    boxShadow: '0px -10px 15px 0px rgba(238, 238, 240, 1)',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'row',
  height: 'fit-content',
  width: '100%',
  fontSize: '12px',
  justifyContent: 'space-between',
  ...(type === 'similarCourses' && {
    justifyContent: 'space-between',
  }),
  alignItems: 'end',
  paddingBottom: '16px',
  boxShadow: '0px -23px 15px 0px rgba(238, 238, 240, 1)',
}));

export const ImageWrapper = styled('div')({
  float: 'left',
  overflow: 'hidden',
  width: '346px',
  height: '191px',
  alignItems: 'center',
  alignSelf: 'center',
  margin: '0px 24px 16px 0px',
  borderRadius: '10px',
  [theme.breakpoints.down('xl')]: {
    width: '224px',
    height: '124px',
    margin: '0px 24px 4px 0px',
  },
  [theme.breakpoints.down('md')]: {
    width: '180px',
    height: '100px',
    margin: '0px 14px 4px 0px',
    borderRadius: '8px',
  },
  [theme.breakpoints.down('sm')]: {
    flexShrink: '0',
    width: '72px',
    height: '46px',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '8px 8px 28px 0px',
    borderRadius: '4px',
  },
});

export const CourseTitle = styled('p')<InfoContainerTypes>(({ type }) => ({
  fontFamily: '"Ubuntu", sans-serif',
  color: ' #2C2525',
  fontWeight: '500',
  margin: '15px 15px 16px 0px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '24px',
    lineHeight: '31px',
    ...(type === 'similarCourses' && {
      margin: '0px 0px 9px 0px',
    }),
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '22px',
    margin: '9px 38px 16px 0px',
    ...(type === 'similarCourses' && {
      margin: '5px 38px 9px 0px',
    }),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '-0.4px',
    textAlign: 'left',
    padding: '0px',
    margin: '0px 14px 8px 0px',
    ...(type === 'similarCourses' && {
      fontSize: '18px',
      fontWeight: '700',
    }),
  },
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
      ...(type === 'similarCourses' && {
        margin: '0px 0px 9px 0px',
      }),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
      lineHeight: '27px',
      textAlign: 'justify',
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
    padding: '0px',
    margin: '0px',
  }),
);

export const InfoContainer = styled(Box)<InfoContainerTypes>(({ type }) => ({
  height: '50px',
  display: 'flex',
  alignItems: 'end !important',
  alignSelf: 'end !important',
  flexWrap: 'wrap',
  [theme.breakpoints.down('xl')]: {
    height: '50px',
    display: 'flex',
    alignItems: 'end !important',
    alignSelf: 'end !important',
    paddingBottom: '0px !important',
  },
  [theme.breakpoints.down('lg')]: {
    height: '50px',
    display: 'flex',
    alignItems: 'end !important',
    alignSelf: 'end !important',
  },
  [theme.breakpoints.down('md')]: {
    height: '50px',
    display: 'flex',
    alignItems: 'end !important',
    alignSelf: 'end !important',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'fit-content',
    margin: '0px',
    padding: '0px',
    flexDirection: 'row',
    ...(type === 'detailedCourse' && {
      marginLeft: '8px',
    }),
  },
}));

export const InfoItem = styled('div')({
  display: 'inline-flex',
  color: 'black',
  alignItems: 'end',
  paddingBottom: '0px !important',
  padding: '0px 5px 10px 0px !important',
  [theme.breakpoints.down('xl')]: {
    paddingBottom: '5px !important',
  },
  [theme.breakpoints.down('md')]: {
    padding: '5px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0px',
    '& img': {
      maxHeight: '20px',
    },
  },
});

export const InfoItemText = styled(Typography)({
  verticalAlign: 'middle',
  color: theme.palette.text.primary,
  fontSize: '14px!important',
  lineHeight: '18px',
  [theme.breakpoints.down('xl')]: {
    width: '70px',
    fontSize: '10px',
    lineHeight: '18px!important',
  },
  [theme.breakpoints.down('sm')]: {
    width: '55px',
    padding: '0px',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '10px!important',
    lineHeight: '14px',
    fontWeight: '400',
    letterSpacing: '-0.4px',
    textAlign: 'left',
  },
});

export const InfoItemTextBox = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    marginLeft: '4px',
    marginRight: '5px',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '8px',
  },
});

export const CourseDescriptionWrapper = styled(Box)<InfoContainerTypes>(({ type }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    ...(type === 'similarCourses' && {
      margin: '0px 17px 9px 0px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    margin: '0px 45px 14px 16px',
  },
}));

export const CourseInfoBox = styled(Box)<InfoContainerTypes>(({ type }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingLeft: '12px !important',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    ...(type === 'similarCourses' && {
      display: 'none',
    }),
  },
}));

export const MobileCourseInfoBox = styled(Box)({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    padding: '0px',
    maxHeight: '20px',
  },
});

export const MobileCourseProgress = styled('div')({
  [theme.breakpoints.up('xs')]: {
    flexShrink: '0',
    flexGrow: '0',
    height: '46px',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
});

export const MobileCourseCompleted = styled('div')({
  [theme.breakpoints.up('xs')]: {
    fontFamily: '"Ubuntu", sans-serif',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    color: '#6D6D6E',
    marginTop: '8px',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
});
