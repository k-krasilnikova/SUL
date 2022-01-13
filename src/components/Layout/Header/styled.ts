import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';
import { Input, Grid } from '@mui/material';

export const HEADER_HEIGHT = '80px';

export const LayoutHeader = styled(Grid)({
  width: 'calc(100vw-10px)',
  height: HEADER_HEIGHT,
  display: 'flex',
  justifyContent: 'flex-start',
  backgroundColor: 'white',
  borderBottom: '2px solid #f0f2f7',
  fontFamily: '"Lato", sans-serif',
});

export const BrandLogo = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '320px',
  display: 'block',
  height: '80px',
  fontSize: '32px',
  padding: '20px 45px 20px 50px',
  color: '#d83938',
});

export const HeaderContent = styled('div')({
  flexGrow: '2',
  flexShrink: '2',
  maxWidth: '1200px',
  display: 'flex',
  justifyContent: 'flex-end',
  height: '80px',
  textAlign: 'right',
});

export const SpaceHolder = styled('div')({
  flexGrowth: '1',
  flexShrink: '2',
  width: '300',
  height: '80px',
});
export const Search = styled(Input)({
  flexGrow: '2',
  flexShrink: '3',
  maxWidth: '730px',
  height: '50px',
  margin: '15px 10px 15px 10px',
  padding: '10px',
  fontSize: '24px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
});
export const Alert = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '50px',
  height: '50px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  margin: '15px 10px',
  padding: '10px',
  '&:hover': {
    cursor: 'pointer',
  },
});
export const Filter = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '50px',
  height: '50px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  margin: '15px 10px',
  padding: '10px 12px 10px 5px',
  '&:hover': {
    cursor: 'pointer',
  },
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
  padding: '10px 10px 10px 20px',
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
