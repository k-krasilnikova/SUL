import styled from 'styled-components';
import { Input, Grid, Accordion } from '@mui/material';
import { Link } from 'react-router-dom';

import theme from 'themeSettings';

interface MobileMenuProps {
  openMenu: boolean;
}

interface CoursesPageProps {
  pagename?: string;
  menuopen: string;
}

export const HEADER_HEIGHT = '80px';
export const HEADER_HEIGHT_IPAD = '60px';
export const HEADER_HEIGHT_MOBILE = '44px';
const PAGES_TO_SEARCH = {
  myCourses: 'My Courses',
  coursesList: 'Courses List',
  detailedCourse: 'Course',
};

export const LayoutHeader = styled(Grid)({
  width: 'calc(100vw-10px)',
  height: HEADER_HEIGHT,
  display: 'flex',
  justifyContent: 'flex-start',
  backgroundColor: theme.palette.secondary.main,
  fontFamily: '"Ubuntu", sans-serif',
  [theme.breakpoints.up('xs')]: {
    height: HEADER_HEIGHT_MOBILE,
  },
  [theme.breakpoints.up('md')]: {
    height: HEADER_HEIGHT_IPAD,
  },
  [theme.breakpoints.up('xl')]: {
    height: HEADER_HEIGHT,
  },
  position: 'relative',
});
export const BrandLogoLink = styled(Link)({
  flexGrow: '0',
  flexShrink: '0',
  [theme.breakpoints.up('xs')]: {
    width: '77.33px',
    margin: '14px 10px 12px 12px',
    quality: '100',
  },
  [theme.breakpoints.up('md')]: {
    width: '101.75px',
    margin: '19px 30px 16px 32px',
    quality: '100',
  },
  '@media(min-width: 1110px)': {
    margin: '19px 48px 16px 32px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '130px',
    margin: '28px 163px 28px 40px',
  },
});
export const BrandLogo = styled('img')({
  [theme.breakpoints.up('xs')]: {
    width: '79px',
  },
  [theme.breakpoints.up('md')]: {
    width: '105px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '130px',
  },
});
export const HeaderContent = styled('div')({
  flexGrow: '2',
  flexShrink: '2',
  display: 'flex',
  justifyContent: 'flex-end',
  height: HEADER_HEIGHT,
  textAlign: 'right',
  position: 'relative',
  fontSize: '24px',
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 101px)',
    fontSize: '16px',
  },
  [theme.breakpoints.up('xs')]: {
    height: HEADER_HEIGHT_MOBILE,
  },
  [theme.breakpoints.up('md')]: {
    height: HEADER_HEIGHT_IPAD,
  },
  [theme.breakpoints.up('xl')]: {
    height: HEADER_HEIGHT,
  },
});
export const SpaceHolder = styled('div')({
  flexGrow: '4',
  flexShrink: '2',
  height: '100%',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  '@media(min-width: 1110px)': {
    display: 'block',
    maxWidth: '1000px',
  },
});
export const Search = styled(Input)<CoursesPageProps>(({ pagename, menuopen }) => ({
  flexGrow: '0',
  flexShrink: '1',
  borderRadius: '3px',
  padding: '10px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
  [theme.breakpoints.up('xs')]: {
    display: 'none!important',
    position: 'relative',
    flexShrink: '0',
    width: '260px',
    height: '30px',
    top: '60px',
    right: 'calc(100vw - 310px)',
    fontSize: '16px',
    ...(pagename === PAGES_TO_SEARCH.myCourses &&
      menuopen === 'false' && {
        display: 'flex',
      }),
    ...(pagename === PAGES_TO_SEARCH.coursesList &&
      menuopen === 'false' && {
        display: 'flex',
      }),
    ...(pagename === PAGES_TO_SEARCH.detailedCourse &&
      menuopen === 'false' && {
        display: 'flex',
        width: '228px',
        top: '60px',
        right: 'calc(100vw - 315px)',
      }),
  },
  [theme.breakpoints.up('md')]: {
    top: '80px',
    right: 'calc(100vw - 330px)',
    ...(pagename === PAGES_TO_SEARCH.detailedCourse && {
      display: 'none!important',
    }),
  },
  '@media(min-width: 1110px)': {
    position: 'relative',
    top: '0px',
    left: '0px',
    display: 'inline-flex!important',
    width: '463px!important',
    height: '44px',
    margin: '8px 16px 8px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    height: '50px',
    fontSize: '24px',
    margin: '15px 20px 15px 0px',
  },
  '@media(min-width: 1650px)': {
    width: '730px!important',
  },
}));
export const RelativeWrapper = styled('div')({
  position: 'relative',
});
export const NotificationsButton = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xs')]: {
    width: '50px',
    height: '50px',
    padding: '10px',
    transform: 'scale(0.6)',
    position: 'absolute',
    top: '-2px',
    left: '-48px',
  },
  [theme.breakpoints.up('md')]: {
    top: '7px',
  },
  '@media(min-width: 1110px)': {
    position: 'relative',
    transform: 'none',
    width: '44px',
    height: '44px',
    margin: '8px 16px 8px 0px',
    padding: '8px',
    top: '0px',
    left: '0px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50px',
    height: '50px',
    margin: '15px 20px 15px 0px',
    padding: '10px',
  },
});
export const FilterButton = styled('div')<CoursesPageProps>(({ pagename, menuopen }) => ({
  flexGrow: '0',
  flexShrink: '0',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xs')]: {
    ...((pagename === PAGES_TO_SEARCH.myCourses && menuopen === 'false') ||
    (pagename === PAGES_TO_SEARCH.coursesList && menuopen === 'false') ||
    (pagename === PAGES_TO_SEARCH.detailedCourse && menuopen === 'false')
      ? {
          position: 'absolute',
          top: '50px',
          right: 'calc(100vw - 360px)',
          width: '50px',
          height: '50px',
          padding: '10px',
          transform: 'scale(0.6)',
        }
      : {
          display: 'none',
        }),
  },
  [theme.breakpoints.up('md')]: {
    top: '70px',
    right: 'calc(100vw - 380px)',
    ...(pagename === PAGES_TO_SEARCH.detailedCourse && {
      display: 'none',
    }),
  },
  '@media(min-width: 1110px)': {
    position: 'relative',
    display: 'block',
    top: '0px',
    left: '0px',
    width: '44px',
    height: '44px',
    marginTop: '8px',
    padding: '8px 9px 10px 6px',
    transform: 'none',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50px',
    height: '50px',
    marginTop: '15px',
    padding: '10px 12px 10px 5px',
  },
}));
export const Filter = styled('div')({
  position: 'absolute',
  zIndex: '15',
  backgroundColor: '#FFFFFF',
  borderRadius: '6px',
  boxShadow: '0px 4px 4px #00000040',
  [theme.breakpoints.up('xs')]: {
    top: '100px',
    width: '274px',
    right: 'calc(100vw - 350px)',
  },
  [theme.breakpoints.up('md')]: {
    left: '0px',
    top: HEADER_HEIGHT_IPAD,
  },
  [theme.breakpoints.up('xl')]: {
    width: '334px',
    left: '0px',
    top: HEADER_HEIGHT,
  },
});
export const FilterAccordion = styled(Accordion)({
  border: 'none',
  boxShadow: 'none',
  padding: '10px',
  '@media(min-width: 1110px)': {
    minHeight: '53px',
  },
  [theme.breakpoints.up('xl')]: {
    minHeight: '65px',
  },
});
export const Notifications = styled('div')({
  position: 'absolute',
  zIndex: '15',
  backgroundColor: '#FFFFFF',
  padding: '10px',
  fontFamily: '"Ubuntu", sans-serif',
  borderRadius: '6px',
  textAlign: 'left',
  boxShadow: '0px 4px 4px 0px #00000040',
  [theme.breakpoints.up('xs')]: {
    top: HEADER_HEIGHT_MOBILE,
    width: '304px',
    left: '-270px',
  },
  [theme.breakpoints.up('md')]: {
    top: HEADER_HEIGHT_IPAD,
    left: '0px',
  },
  '@media(min-width: 1110px)': {
    width: '400px',
  },
  '@media(min-width: 1130px)': {
    width: '452px',
    left: '-8px',
  },
  [theme.breakpoints.up('xl')]: {
    top: HEADER_HEIGHT,
    width: '572px',
    left: '0px',
  },
});
export const UserBlock = styled(Link)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  '@media(min-width: 1110px)': {
    display: 'flex',
    height: '50px',
    padding: '3px',
    margin: '5px 30px 5px 10px',
  },
  [theme.breakpoints.up('xl')]: {
    height: '60px',
    padding: '6px',
    margin: '10px 45px 10px 20px',
  },
});
export const UserName = styled('div')({
  color: 'black',
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
  '@media(min-width: 1110px)': {
    height: '23px',
    marginLeft: '16px',
    fontSize: '20px',
    padding: '0px 5px 0px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    height: '28px',
    marginLeft: '22px',
    fontSize: '24px',
    padding: '0px 10px 0px 0px',
  },
});
export const LogOut = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  '@media(min-width: 1110px)': {
    display: 'block',
    width: '40px',
    height: '30px',
    margin: '15px 16px 15px 0px',
    padding: '3px 0px 0px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50px',
    height: '50px',
    margin: '15px 20px 15px 0px',
    padding: '12px 10px 10px 10px',
  },
});
export const MobileMenuIcon = styled('div')<MobileMenuProps>(({ openMenu }) => ({
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xs')]: {
    width: '18px',
    height: '12px',
    textAlign: 'center',
    margin: '15px 17px 16px 6px',
    transform: openMenu ? 'rotate(90deg) translateX(2px) translateY(-5px)' : 'none',
  },
  [theme.breakpoints.up('md')]: {
    width: '18px',
    height: '20px',
    margin: '15px 17px 16px 6px',
    transform: openMenu ? 'rotate(90deg) translateX(4px) translateY(-6px)' : 'none',
  },
  '@media(min-width: 1110px)': {
    display: 'none',
  },
}));