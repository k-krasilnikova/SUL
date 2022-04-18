import { styled } from '@mui/material';

import theme from 'themeSettings';

interface CourseInfoWrapperProps {
  isCourseInfoOpen: boolean;
}

export const CourseInfoWrapper = styled('div')<CourseInfoWrapperProps>(({ isCourseInfoOpen }) => ({
  display: 'inline-block',
  float: 'left',
  width: 'calc(100% - 196px)',
  maxHeight: '438px',
  paddingBottom: '20px',
  [theme.breakpoints.down('xl')]: {
    width: 'calc(100% - 193px)',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    float: 'none',
    width: '100%',
    marginTop: '23px',
    maxHeight: '290px',
    paddingBottom: 0,
    ...(!isCourseInfoOpen && {
      display: 'none',
    }),
  },
}));

export const CourseInfoContent = styled('div')({
  display: 'block',
  width: 'calc(100% - 196px)',
  padding: '31px 238px 31px 54px',
  textAlign: 'left',
  color: 'black',
  border: '1px solid #E0E0E3',
  borderRadius: '8px',
  overflowY: 'auto',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
    padding: '24px 44px 31px 24px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100%',
    padding: '8px 19px 3px 8px',
  },
});

export const CourseInfoTitle = styled('span')({
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '32px',
  fontWeight: '700',
  lineHeight: '38px',
  letterSpacing: '0em',
  [theme.breakpoints.down('xl')]: {
    fontSize: '24px',
    lineHeight: '28px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    lineHeight: '21px',
  },
});

export const CourseInfoText = styled('p')({
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '31px',
  letterSpacing: '-0.4px',
  margin: '24px 0px 0px 0px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
    lineHeight: '24px',
    margin: '8px 0px 0px 0px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '18px',
    margin: '4px 0px 0px 0px',
  },
});
