import styled from 'styled-components';
import { Input, Grid } from '@mui/material';

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
export const BrandLogo = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '320px',
  display: 'block',
  height: HEADER_HEIGHT,
  fontSize: '32px',
  fontWeight: 'bold',
  padding: '20px 45px 20px 50px',
  color: '#D43E41',
});
export const BrandLogoBlack = styled('span')({
  color: 'black',
});
export const HeaderContent = styled('div')({
  flexGrow: '2',
  flexShrink: '2',
  maxWidth: '1200px',
  display: 'flex',
  justifyContent: 'flex-end',
  height: HEADER_HEIGHT,
  textAlign: 'right',
});
export const SpaceHolder = styled('div')({
  flexGrow: '2',
  flexShrink: '3',
  maxWidth: '400px',
  height: HEADER_HEIGHT,
});
export const Search = styled(Input)({
  flexGrow: '1',
  flexShrink: '3',
  maxWidth: '500px',
  height: '50px',
  borderRadius: '3px',
  margin: '15px 10px 15px 10px',
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
  margin: '15px 10px',
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
  borderRadius: '5px',
  boxShadow: '0px 2px 2px 1px #919191',
});
export const Notifications = styled('div')({
  width: '572px',
  backgroundColor: '#FFFFFF',
  borderRadius: '5px',
  boxShadow: '0px 2px 2px 1px #919191',
  padding: '10px',
});
export const UserBlock = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '300',
  height: '60px',
  padding: '0px',
  margin: '10px 5px 10px 20px',
});
export const UserName = styled('div')({
  width: '300',
  height: '60px',
  padding: '15px 10px 10px 20px',
  fontWeight: 'bold',
  fontSize: '24px',
  color: 'black',
});
export const LogOut = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '50px',
  height: '50px',
  margin: '15px 20px 15px 10px',
  padding: '10px',
  '&:hover': {
    cursor: 'pointer',
  },
});
