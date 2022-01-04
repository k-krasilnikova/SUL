import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

import theme from 'themeSettings';

interface InfoContainerTypes {
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  lineHeight?: number;
}

export const PageContainer = styled('div')({
  [theme.breakpoints.up('lg')]: {
    maxHeight: '500px',
    maxWidth: '800px',
    overflowY: 'scroll',
  },
  [theme.breakpoints.up('xl')]: {
    maxHeight: '600px',
    maxWidth: '1150px',
    overflowY: 'scroll',
  },
  margin: '10px auto 10px auto',
  border: '1px solid #ebebeb',
  borderRadius: '10px',
});
export const CourseContainer = styled(Box)({
  width: 'calc(100%-40px)',
  backgroundColor: '#ebebeb',
  padding: '10px',
  borderRadius: '10px',
  fontFamily: '"Lato", sans-serif',
  margin: '20px',
});
export const ImageWrapper = styled('div')({
  [theme.breakpoints.up('xs')]: {
    float: 'none',
    width: '300px',
    margin: '0px auto',
  },
  [theme.breakpoints.up('md')]: {
    float: 'left',
    margin: '0px 25px 5px 0px',
  },
});
export const CourseTitle = styled('p')<InfoContainerTypes>(({ fontSize }) => ({
  [theme.breakpoints.up('xs')]: {
    clear: 'both',
    fontSize: '16px',
    lineHeight: '26px',
    padding: '5px',
  },
  [theme.breakpoints.up('md')]: {
    clear: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
    lineHeight: '34px',
    padding: '5px',
  },
  color: 'black',
  textAlign: 'justify',
  margin: '0px',
  ...(fontSize && {
    fontSize: fontSize,
  }),
}));

export const CourseDescription = styled('p')<InfoContainerTypes>(({ fontSize, lineHeight }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    lineHeight: '22px',
    padding: '5px',
    marginTop: '3px',
    ...(fontSize && {
      fontSize: `${fontSize}px`,
    }),
    ...(lineHeight && {
      lineHeight: `${lineHeight}px`,
    }),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    lineHeight: '30px',
    padding: '5px',
    marginTop: '5px',
    ...(fontSize && {
      fontSize: `${fontSize}px`,
    }),
    ...(lineHeight && {
      lineHeight: `${lineHeight}px`,
    }),
  },
  color: 'black',
  textAlign: 'justify',
  margin: '0px',
  ...(fontSize && {
    fontSize: `${fontSize}px`,
  }),
  ...(lineHeight && {
    lineHeight: `${lineHeight}px`,
  }),
}));

export const ButtonsContainer = styled('div')({
  [theme.breakpoints.up('xs')]: {
    // display: 'block',
    display: 'flex',
    height: '90px',
    margin: '10px',
    fontSize: '8px',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('lg')]: {
    height: '50px',
    margin: '20px',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
export const Divider = styled('div')({
  [theme.breakpoints.up('lg')]: {
    flex: '1 2 auto',
  },
});
export const InfoContainer = styled(Box)<InfoContainerTypes>(({ backgroundColor }) => ({
  [theme.breakpoints.up('xs')]: {
    // minWidth: '326px',
    minWidth: 'fit-content',
    // margin: '10px',
    margin: '0px',
    // height: '30px',
    height: '100%',
    padding: '0px',
  },
  [theme.breakpoints.up('lg')]: {
    // minWidth: '410px',
    minWidth: 'fit-content',
    // margin: '20px 10px',
    margin: '0px',
    // height: '50px',
    height: '100%',
    padding: '10px 5px 10px 5px',
  },
  // display: 'inline-block',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  ...(backgroundColor && {
    backgroundColor: backgroundColor,
  }),
}));
export const InfoItem = styled(Typography)<InfoContainerTypes>(({ color }) => ({
  [theme.breakpoints.up('xs')]: {
    width: '80px',
    padding: '5px',
    fontSize: '10px',
    lineHeight: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100px',
    padding: '5px',
    fontSize: '14px',
    lineHeight: '24px',
  },
  display: 'inline-flex',
  verticalAlign: 'middle',
  color: 'grey',
  ...(color && {
    color: `${color}`,
  }),
}));
