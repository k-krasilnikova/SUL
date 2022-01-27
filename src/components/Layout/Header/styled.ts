import styled from 'styled-components';
import { Input, Grid, Accordion } from '@mui/material';
import { Link } from 'react-router-dom';

import theme from 'themeSettings';

export const HEADER_HEIGHT = '80px';

export const LayoutHeader = styled(Grid)({
  width: 'calc(100vw-10px)',
  height: HEADER_HEIGHT,
  display: 'flex',
  justifyContent: 'flex-start',
  backgroundColor: theme.palette.secondary.main,
  fontFamily: '"Ubuntu", sans-serif',
});
export const BrandLogoLink = styled(Link)({
  flexGrow: '0',
  flexShrink: '0',
  width: '127px',
  margin: '28px 163px 0px 40px',
});
export const BrandLogo = styled('img')({
  width: '127px',
});
export const HeaderContent = styled('div')({
  flexGrow: '2',
  flexShrink: '2',

  display: 'flex',
  justifyContent: 'flex-end',
  height: HEADER_HEIGHT,
  textAlign: 'right',
});
export const SpaceHolder = styled('div')({
  flexGrow: '1',
  flexShrink: '3',
  maxWidth: '1000px',
  height: HEADER_HEIGHT,
});
export const Search = styled(Input)({
  flexGrow: '0',
  flexShrink: '3',
  width: '730px',
  height: '50px',
  borderRadius: '3px',
  margin: '15px 20px 15px 0px',
  padding: '10px',
  fontSize: '24px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
});
export const RelativeWrapper = styled('div')({
  position: 'relative',
});
export const NotificationsButton = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '50px',
  height: '50px',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  margin: '15px 20px 15px 0px',
  padding: '10px',
  '&:hover': {
    cursor: 'pointer',
  },
});
export const FilterButton = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '50px',
  height: '50px',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  marginTop: '15px',
  padding: '10px 12px 10px 5px',
  '&:hover': {
    cursor: 'pointer',
  },
});
export const Filter = styled('div')({
  position: 'absolute',
  zIndex: '15',
  top: '70px',
  width: '334px',
  backgroundColor: '#FFFFFF',
  borderRadius: '6px',
});
export const FilterAccordion = styled(Accordion)({
  border: 'none',
  boxShadow: 'none',
  height: '65px',
  padding: '10px',
});
export const Notifications = styled('div')({
  position: 'absolute',
  zIndex: '15',
  top: '70px',
  width: '572px',
  backgroundColor: '#FFFFFF',
  padding: '10px',
  fontFamily: '"Ubuntu", sans-serif',
  borderRadius: '6px',
  textAlign: 'left',
  boxShadow:
    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
});
export const UserBlock = styled(Link)({
  display: 'flex',
  justifyContent: 'flex-start',
  height: '60px',
  padding: '0px',
  margin: '10px 45px 10px 20px',
});
export const UserName = styled('div')({
  height: '60px',
  padding: '12px 10px 13px 0px',
  marginLeft: '22px',
  fontSize: '24px',
  color: 'black',
});
export const LogOut = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '50px',
  height: '50px',
  margin: '15px 20px 15px 0px',
  padding: '10px',
  '&:hover': {
    cursor: 'pointer',
  },
});
