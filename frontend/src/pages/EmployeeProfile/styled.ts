import styled from 'styled-components';
import { List, ListItem } from '@mui/material';

import theme from 'themeSettings';
import { Button } from 'components/Button';

export const ProfileBox = styled('div')({
  width: '90%',
  display: 'flex',
  flexDirection: 'row',
  margin: '24px 0px 92px 165px',
});
export const AvatarWrapper = styled('div')({
  textAlign: 'center',
  marginRight: '125px',
  marginLeft: '0px',
  width: '150px',
});
export const EmployeeName = styled(ListItem)({
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '28px',
  textAlign: 'left',
  marginBottom: '24px',
});
export const UserInfoList = styled(List)({
  color: '#2C2525',
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
  paddingTop: '0px',
  display: 'inline-block',
  verticalAlign: 'top',
  '&.MuiList-root': {
    padding: '0px',
    marginTop: '-10px',
  },
});
export const UserInfoLabel = styled('span')({
  width: '132px',
  display: 'inline-block',
  fontSize: '20px',
  lineHeight: '23px',
  height: '24px',
  marginBottom: '20px',
  padding: '0px',
});
export const UserInfoText = styled('span')({
  width: '400px',
  display: 'inline-flex',
  fontSize: '20px',
  lineHeight: '23px',
  padding: '0px 0px 0px 40px',
  height: '24px',
  marginBottom: '20px',
});
export const BackButton = styled(Button)({
  height: '39px',
  width: '84px',
  fontSize: '16px !important',
  margin: '40px 0px 0px 40px !important',
  [theme.breakpoints.down('sm')]: {
    display: 'none !important',
  },
});
