import styled from 'styled-components';
import { Box, Grid } from '@mui/material';

import theme from 'themeSettings';
import { Info } from 'enums/info';

export interface InfoContainerTypes {
  color?: string;
  fontSize?: number;
  lineHeight?: number;
  type?: Info;
}

interface Image {
  imageUrl?: string;
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
  [theme.breakpoints.down('xl')]: {
    padding: '16px 26px 16px 16px',
    height: '218px',
    ...(type === Info.similarCourses && {
      padding: '16px 32px 26px 16px',
      maxHeight: '207px',
    }),
  },
  [theme.breakpoints.down(1200)]: {
    height: '205px',
  },
  [theme.breakpoints.down(1115)]: {
    height: '242px',
  },
  [theme.breakpoints.down('lg')]: {
    height: '160px',
  },
  [theme.breakpoints.down(950)]: {
    height: '178px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '10px 15px 5px 10px',
    height: '140px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
    padding: '8px 8px 10px 8px',
    height: '82px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 0 16px 16px',
    height: '255px',
  },
}));

export const CourseTextContainer = styled('div')({
  flexGrow: '2',
});

export const ImageWrapper = styled('div')<Image>(({ imageUrl }) => {
  return {
    float: 'left',
    background: `no-repeat url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    width: '346px',
    height: '191px',
    alignItems: 'center',
    alignSelf: 'center',
    margin: '0px 24px 16px 0px',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 2px #00000021',
    [theme.breakpoints.down('xl')]: {
      width: '224px',
      height: '124px',
      margin: '0px 24px 4px 0px',
    },
    [theme.breakpoints.down(1200)]: {
      width: '194px',
      height: '100px',
    },
    [theme.breakpoints.down('md')]: {
      width: '180px',
      height: '100px',
      margin: '0px 14px 4px 0px',
      borderRadius: '8px',
      boxShadow: '1px 1px 2px 1px #00000021',
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
  };
});

export const CourseTitle = styled('p')<InfoContainerTypes>(({ type }) => ({
  fontSize: '24px',
  fontWeight: '500',
  margin: '9px 5px 16px 0px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '24px',
    lineHeight: '31px',
    margin: '9px 0px 16px 0px',
    ...(type === Info.similarCourses && {
      margin: '0px 0px 9px 0px',
    }),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '22px',
    margin: '9px 10px 16px 0px',
    ...(type === Info.similarCourses && {
      margin: '5px 18px 9px 0px',
    }),
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0px 10px 10px 0px',
    fontFamily: '"Ubuntu", sans-serif',
    color: ' #2C2525',
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '-0.4px',
    textAlign: 'left',
    padding: '0',
    fontWeight: '500',
    ...(type === Info.similarCourses && {
      fontSize: '18px',
      fontWeight: '700',
    }),
  },
}));

export const CourseDescription = styled('p')<InfoContainerTypes>(
  ({ fontSize, lineHeight, type }) => ({
    fontSize: '18px',
    lineHeight: '21px',
    padding: '0',
    margin: '0',
    color: '#131313',
    fontFamily: '"Ubuntu", sans-serif',
    ...(fontSize && {
      fontSize: `${fontSize}px`,
    }),
    ...(lineHeight && {
      lineHeight: `${lineHeight}px`,
    }),
    [theme.breakpoints.down('xl')]: {
      fontSize: '18px',
      lineHeight: '27px',
      ...(type === Info.similarCourses && {
        margin: '0px 0px 9px 0px',
        lineHeight: '21px',
        fontSize: '16px',
      }),
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '22px',
      letterSpacing: '-0.4px',
      textAlign: 'left',
      padding: '0',
      margin: '0px 10px 9px 7px',
      ...(type === Info.similarCourses && {
        margin: '0px 0px 9px 0px',
      }),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }),
);

export const CourseDescriptionWrapper = styled(Box)<InfoContainerTypes>(({ type }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    ...(type === Info.similarCourses && {
      margin: '0px 17px 9px 0px',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    margin: '0px 25px 14px 16px',
  },
}));

export const MobileCourseInfoBox = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    padding: '0',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
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
