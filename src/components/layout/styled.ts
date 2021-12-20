import styled from 'styled-components'
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const LayoutHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100vw',
  backgroundColor: 'white',
  borderBottom: '2px solid #f0f2f7',
  fontFamily: '"Lato", sans-serif',
});
export const HeaderDivider = styled.div`
  display: inline-block;
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  margin-top: 23px;
  margin-bottom: 2px;
`
export const BrandLogo = styled.div`
  flex-grow: 3;
  flex-shrink: 1;
  display: block;
  height: 68px;
  width: 300px;
  font-size: 32px;
  padding: 15px 45px 20px 50px;
  border-right: 2px solid #f0f2f7;
  color: #d83938;
`
export const HeaderContent = styled.div`
  flex-grow: 1;
  flex-shrink: 3;
  display: grid;
  grid-template-columns: 1fr 130px 1px 340px 1px 100px; 
  grid-template-rows: 68px;
  max-width: 1200px;
  text-align: right;
`
export const SpaceHolder = styled.div`
  display: inline-block;
`
export const MyCoursesCounter = styled.div`
  display: inline-block;
  width: 70px;
  height: 40px;
  margin: 15px 30px 15px 30px;
  padding: 8px 7px 8px 7px;
  border-radius: 3px;
  background-color: #d83938;
  color: white;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
`
export const MyCoursesCounterContent =  styled.div`
  display: flex;
`
export const MyCoursesCounterNumber = styled.span`
  display: inline-block;
  height: 18px;
  width: 36px;
  padding: 2px 8px 8px 5px;
  text-align: center
`
export const UserInfo = styled.div`
display: flex;
  width: 280px;
  height: 58px;
  margin: 5px 10px 5px 30px;
  padding: 3px;
  border-radius: 3px;
  border: 1px solid #9b9b9b;
`
export const UserAvatar = styled(Avatar)({
  display: 'inline-block',
  width: '30px',
  height: '30px',
  margin: '5px 10px',
});
export const UserName = styled.span`
  display: inline-block;
  font-size: 30px;
  width: 260px;
  height: 30px;
  margin: 10px 5px;
`
export const ArrowDown = styled(ArrowDropDownIcon)({
  display: 'inline-block',
  width: '5px',
  height: '5px',
  margin: '12px 10px 10px 0px',
  fontSize: '20px',
  color: '#9b9b9b',
});
export const ArrowUp = styled(ArrowDropUpIcon)({
  display: 'inline-block',
  width: '5px',
  height: '5px',
  margin: '12px 10px 10px 0px',
  fontSize: '20px',
  color: '#9b9b9b',
});
export const UserPopper = styled(Box)({
  display: 'block',
  width: '280px',
  padding: '25px',
  backgroundColor: 'white',
  borderBottom: '2px solid #f0f2f7',
  fontFamily: '"Lato", sans-serif',
  fontSize: '16px',
  boxShadow: '0 1px 4px grey'
});
export const DividerHorizontal = styled(Divider)({
  width: '228px',
});
export const Link = styled.a`
display: flex;
  color: dodgerblue;
  margin-top: 10px
`
export const LogOut = styled(LogoutIcon)({
  display: 'inline-block',
  width: '50px',
  height: '50px',
  margin: '20px',
  fontSize: '30px',
  color: '#9b9b9b',
});
export const MenuTabs = styled.div`
  width: 300px;
  height: 100vh;
  background-color: white;
  border-right: 2px solid #f0f2f7;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  margin: 0px;
  padding-top: 20px;
`
export const MenuTab = styled.div`
  display: flex;
  height: 60px;
  padding: 14px 20px 18px 20px;
  border-left: 3px solid white;
  color: 'black';
  &:hover {
    color: #d83938;
    border-left: 3px solid #d83938;
  };
`
export const MenuTabName = styled.span`
  display: inline-block;
  height: 24px;
  padding: 4px 0px 0px 8px;
`