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
  fontFamily: '"Ubuntu", sans-serif',
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
  minHeight: '100%',
  [theme.breakpoints.up('xs')]: {
    borderRadius: '4px',
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '11px',
  },
  [theme.breakpoints.up('xl')]: {
    borderRadius: '16px',
  },
});

export const AboutCourseContainer = styled('div')({
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
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 0 16px 16px',
    minHeight: '295px',
  },
});

export const CourseTextContainer = styled('div')({
  flexGrow: '2',
});

export const ButtonsContainer = styled('div')({
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export const CourseTitle = styled('p')({
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
    padding: '0px',
    flexDirection: 'row',
  },
  height: 'fit-content',
  display: 'flex',
  alignItems: 'middle',
  alignSelf: 'end',
});

export const InfoItem = styled('div')({
  [theme.breakpoints.up('xs')]: {
    padding: '0px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '5px',
  },
  display: 'inline-flex',
  verticalAlign: 'middle',
  color: 'black',
});
export const InfoItemText = styled(Typography)({
  [theme.breakpoints.up('xs')]: {
    width: '45px',
    padding: '0px',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '10px!important',
    lineHeight: '14px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '70px',
    fontSize: '10px',
    fontWeight: '400',
    lineHeight: '18px!important',
    letterSpacing: '-0.4px',
    textAlign: 'left',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '14px!important',
    lineHeight: '18px',
  },
  verticalAlign: 'middle',
  color: theme.palette.text.primary,
  fontSize: '14px',
});

export const InfoItemTextBox = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    marginLeft: '4px',
    marginRight: '15px',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '8px',
  },
});

export const CourseDescriptionWrapper = styled(Box)({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  margin: '0px 45px 14px 16px',
});

export const CourseInfoBox = styled(Box)({
  [theme.breakpoints.up('sm')]: {
    paddingLeft: '12px !important',
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: '30px !important',
  },
});

export const MobileCourseInfoBox = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    padding: '0px',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
});

export const InfoItemIcon = styled('img')({
  [theme.breakpoints.up('xs')]: {
    width: '15px',
  },
  [theme.breakpoints.up('md')]: {
    width: '20px',
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
