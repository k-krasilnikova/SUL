import styled from 'styled-components';
import { List, ListItem, Button as ToggleButton, Input, ButtonGroup } from '@mui/material';
import { Search } from '@mui/icons-material';

import theme from 'themeSettings';
import { Button } from 'components/Button';

interface ToggleButtonProps {
  isOpened: boolean;
}

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
export const SkillsAndCoursesBox = styled('div')({
  marginLeft: '63px',
  width: '80%',
  display: 'flex',
});
export const EmployeeButtonGroup = styled(ButtonGroup)({
  height: '40px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  alignItems: 'end',
});
export const SkillsAndCoursesButton = styled(ToggleButton)<ToggleButtonProps>(({ isOpened }) => ({
  backgroundColor: '#ffffff !important',
  color: '#000000 !important',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '20px !important',
  fontWeight: '400 !important',
  width: '135px !important',
  height: '40px',
  borderRadius: '4px 4px 0px 0px !important',
  border: '1px solid #0000001A !important',
  padding: '0px !important',
  ...(isOpened && {
    width: '146px !important',
    height: '44px',
  }),
}));
export const AddCourseButton = styled(Button)({
  width: '146px',
  height: '40px',
  margin: '-2px 0px 0px 500px !important',
  fontWeight: '500',
  fontSize: '20px !important',
  padding: '0px !important',
});
export const UserSkillsWrapper = styled('div')({
  width: '100%',
  marginTop: '52px',
});
export const SearchIcon = styled(Search)({});
export const SearchSkill = styled(Input)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px!important',
    lineHeight: '33.61px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px!important',
  },
});
