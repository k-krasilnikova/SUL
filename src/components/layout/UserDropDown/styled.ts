import styled from 'styled-components';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const UserInfo = styled('div')({
  display: 'flex',
  width: '280px',
  height: '58px',
  margin: '5px 10px 5px 30px',
  padding: '3px',
  borderRadius: '3px',
  border: '1px solid #9b9b9b',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#f1f1f1',
  },
});
export const UserAvatar = styled(Avatar)({
  display: 'inline-block',
  width: '30px',
  height: '30px',
  margin: '5px 10px',
});
export const UserName = styled('span')({
  display: 'inline-block',
  fontSize: '30px',
  width: '260px',
  height: '30px',
  margin: '10px 5px',
});
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
  boxShadow: '0 1px 4px grey',
});
export const DividerHorizontal = styled(Divider)({
  width: '228px',
});
export const Link = styled('a')({
  display: 'flex',
  color: 'dodgerblue',
  marginTop: '10px',
});
