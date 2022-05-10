import { styled, Box, Grid } from '@mui/material';

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
  padding: '16px 0 16px 16px',
  textOverflow: 'ellipse',
  overflow: 'hidden',
  [theme.breakpoints.down('xl')]: {
    padding: '16px 26px 16px 16px',
    ...(type === Info.similarCourses && {
      padding: '16px 32px 26px 16px',
    }),
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '10px 15px 5px 10px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'start',
    padding: '8px 8px 10px 8px',
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
    margin: '0 24px 16px 0',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 2px #00000021',
    [theme.breakpoints.down('xl')]: {
      width: '224px',
      height: '124px',
      margin: '0 24px 4px 0',
    },
    [theme.breakpoints.down(1200)]: {
      width: '194px',
      height: '100px',
    },
    [theme.breakpoints.down('md')]: {
      width: '180px',
      height: '100px',
      margin: '0 14px 4px 0',
      borderRadius: '8px',
      boxShadow: '1px 1px 2px 1px #00000021',
    },
    [theme.breakpoints.down('sm')]: {
      flexShrink: 0,
      width: '72px',
      height: '46px',
      alignItems: 'center',
      alignSelf: 'center',
      margin: '8px 8px 28px 0',
      borderRadius: '4px',
    },
  };
});

export const CourseTitle = styled('p')<InfoContainerTypes>(({ type }) => ({
  margin: '9px 5px 16px 0',
  fontSize: '24px',
  fontWeight: 500,
  wordBreak: 'break-word',
  [theme.breakpoints.down('xl')]: {
    margin: '9px 0 16px 0',
    fontSize: '24px',
    ...(type === Info.similarCourses && {
      margin: '0 0 9px 0',
    }),
  },
  [theme.breakpoints.down('md')]: {
    margin: '9px 10px 16px 0',
    fontSize: '18px',
    fontWeight: 700,
    ...(type === Info.similarCourses && {
      margin: '5px 18px 9px 0',
    }),
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0 10px 10px 0',
    padding: 0,
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'left',
    color: ' #2C2525',
    ...(type === Info.similarCourses && {
      fontSize: '18px',
      fontWeight: 700,
    }),
  },
}));

export const CourseDescription = styled('p')<InfoContainerTypes>(
  ({ fontSize, lineHeight, type }) => ({
    padding: 0,
    margin: 0,
    fontSize: '18px',
    wordBreak: 'break-word',
    color: '#131313',
    ...(fontSize && {
      fontSize: `${fontSize}px`,
    }),
    ...(lineHeight && {
      lineHeight: `${lineHeight}px`,
    }),
    [theme.breakpoints.down('xl')]: {
      fontSize: '18px',
      lineHeight: 1.5,
      ...(type === Info.similarCourses && {
        margin: '0 0 9px 0',
        fontSize: '16px',
        lineHeight: 1.2,
      }),
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      padding: '0',
      margin: '0 10px 9px 7px',
      fontSize: '14px',
      lineHeight: 1.5,
      textAlign: 'left',
      ...(type === Info.similarCourses && {
        margin: '0 0 9px 0',
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
      margin: '0 17px 9px 0',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    margin: '0 25px 14px 16px',
  },
}));

export const MobileCourseInfoBox = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    padding: 0,
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
});

export const MobileCourseProgress = styled('div')({
  [theme.breakpoints.up('xs')]: {
    flexShrink: 0,
    flexGrow: 0,
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
