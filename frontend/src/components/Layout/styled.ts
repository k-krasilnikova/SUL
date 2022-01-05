import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';
import Grid from '@mui/material/Grid';

export const HEADER_HEIGHT = '70px';

export const LayoutHeader = styled(Grid)({
  width: 'calc(100vw-10px)',
  backgroundColor: 'white',
  borderBottom: '2px solid #f0f2f7',
  fontFamily: '"Lato", sans-serif',
});

export const HeaderDivider = styled('div')({
  display: 'inline-block',
  width: '1px',
  height: '20px',
  backgroundColor: '#9b9b9b',
  marginTop: '23px',
  marginBottom: '2px',
});

export const BrandLogo = styled('div')({
  display: 'block',
  height: '68px',
  fontSize: '32px',
  padding: '15px 45px 20px 50px',
  borderRight: '2px solid #f0f2f7',
  color: '#d83938',
});

export const HeaderContent = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 130px 1px 340px 1px 100px',
  gridTemplateRows: '68px',
  maxWidth: '1200px',
  textAlign: 'right',
});

export const SpaceHolder = styled('div')({
  display: 'inline-block',
});

export const Counter = styled('div')({
  display: 'inline-block',
  width: '70px',
  height: '40px',
  margin: '15px 30px 15px 30px',
  padding: '8px 7px 8px 7px',
  borderRadius: '3px',
  backgroundColor: '#d83938',
  color: 'white',
  fontSize: '18px',
  fontFamily: '"Lato", sans-serif',
});

export const MyCoursesCounterContent = styled('div')({
  display: 'flex',
});

export const MyCoursesCounterNumber = styled('span')({
  display: 'inline-block',
  height: '18px',
  width: '36px',
  padding: '2px 8px 8px 5px',
  textAlign: 'center',
});

export const LogOut = styled(LogoutIcon)({
  display: 'inline-block',
  width: '50px',
  height: '50px',
  margin: '20px',
  fontSize: '30px',
  color: '#9b9b9b',
  '&:hover': {
    cursor: 'pointer',
  },
});
