import styled from 'styled-components';
import { Input, Grid, Accordion } from '@mui/material';
import { Link } from 'react-router-dom';

export const HEADER_HEIGHT = '80px';

export const LayoutHeader = styled(Grid)({
  width: 'calc(100vw-10px)',
  height: HEADER_HEIGHT,
  display: 'flex',
  justifyContent: 'flex-start',
  backgroundColor: 'white',
  borderBottom: '2px solid #f0f2f7',
  fontFamily: '"Ubuntu", sans-serif',
});
export const BrandLogoLink = styled(Link)({
  flexGrow: '0',
  flexShrink: '0',
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
  flexGrow: '1',
  flexShrink: '3',
  maxWidth: '730px',
  height: '50px',
  borderRadius: '3px',
  margin: '15px 20px 15px 0px',
  padding: '10px',
  fontSize: '24px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
});
export const NotificationsButton = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '50px',
  height: '50px',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  margin: '15px 10px 15px 0px',
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
  margin: '15px 10px',
  padding: '10px 12px 10px 5px',
  '&:hover': {
    cursor: 'pointer',
  },
});
export const Filter = styled('div')({
  width: '334px',
  backgroundColor: '#FFFFFF',
});
export const FilterAccordion = styled(Accordion)({
  border: 'none',
  boxShadow: 'none',
});
export const Notifications = styled('div')({
  width: '572px',
  backgroundColor: '#FFFFFF',
  padding: '10px',
  fontFamily: '"Ubuntu", sans-serif',
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
  padding: '15px 10px 10px 0px',
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
