import styled from 'styled-components';
import { List, ListItem, Button as ToggleButton, ButtonGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import theme from 'themeSettings';
import { Button } from 'components/Button';

interface ToggleButtonProps {
  isOpened: boolean;
}

interface ShowOnMobile {
  displayInfo: boolean;
}

export const ProfileBox = styled('div')({
  width: '90%',
  display: 'flex',
  flexDirection: 'row',
  margin: '24px 0px 92px 165px',
  [theme.breakpoints.down('xl')]: {
    margin: '8px 0px 50px 112px !important',
  },
  [theme.breakpoints.down('md')]: {
    margin: '16px 0px 50px 16px !important',
    width: '100%',
  },
});

export const AvatarWrapper = styled('div')({
  textAlign: 'center',
  marginRight: '10%',
  marginLeft: '0px',
  width: '150px',
  [theme.breakpoints.down('xl')]: {
    width: '100px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '60px',
    marginRight: '20px',
  },
});

export const EmployeeName = styled(ListItem)({
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '28px',
  textAlign: 'left',
  marginBottom: '24px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '22px',
    lineHeight: '25px',
    marginBottom: '16px',
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: '10px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '18px',
    marginBottom: '50px',
  },
});

export const UserInfoList = styled(List)({
  color: '#2C2525',
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
  paddingTop: '0px',
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '5px',
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
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
    lineHeight: '21px',
    marginBottom: '12px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '80px',
  },
});

export const UserInfoText = styled('span')({
  width: '400px',
  display: 'inline-flex',
  fontSize: '20px',
  lineHeight: '23px',
  padding: '0px 0px 0px 40px',
  height: '24px',
  marginBottom: '20px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
    lineHeight: '21px',
    marginBottom: '12px',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '0px 0px 0px 10px',
  },
});

export const BackButton = styled(Button)({
  height: '39px',
  width: '84px',
  fontSize: '16px !important',
  margin: '40px 0px 0px 40px !important',
  [theme.breakpoints.down('xl')]: {
    height: '32px',
    width: '64px',
    fontSize: '12px !important',
    margin: '32px 0px 0px 36px !important',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none !important',
  },
});
export const SkillsAndCoursesBox = styled('div')({
  marginLeft: '63px',
  width: '80%',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    marginLeft: '16px',
    width: '100%',
  },
});
export const EmployeeButtonGroup = styled(ButtonGroup)({
  height: '40px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  alignItems: 'end',
  [theme.breakpoints.down('xl')]: {
    height: '36px',
  },
  [theme.breakpoints.down('lg')]: {
    height: '28px',
  },
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
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px !important',
    height: '36px',
    ...(isOpened && {
      height: '40px',
    }),
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px !important',
    height: '28px',
    width: '90px !important',
    paddingTop: '3px !important',
    ...(isOpened && {
      width: '100px !important',
      height: '32px',
    }),
  },
}));

export const AddCourseButton = styled(Button)({
  width: '146px',
  height: '40px',
  margin: '-2px 0px 0px 500px !important',
  fontWeight: '500',
  fontSize: '20px !important',
  padding: '0px !important',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px !important',
    width: '126px',
    height: '36px',
    margin: '-2px 0px 0px 35% !important',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px !important',
    height: '32px',
    margin: '-2px 0px 0px 10% !important',
  },
  [theme.breakpoints.down('md')]: {
    width: '86px',
    height: '28px',
    margin: '0px 0px 0px 7% !important',
  },
});

export const UserSkillsWrapper = styled('div')({
  maxWidth: '100%',
  marginTop: '52px',
  [theme.breakpoints.down('xl')]: {
    paddingTop: '16px',
    maxWidth: '828px',
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: '22px',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '-38px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0',
  },
});

export const UserInfoListItems = styled('div')<ShowOnMobile>(({ displayInfo }) => ({
  [theme.breakpoints.down('lg')]: {
    margin: '60px 0px 0px -80px',
  },
  [theme.breakpoints.down('md')]: {
    display: displayInfo ? 'block' : 'none',
  },
}));

export const ExpandMore = styled(ExpandMoreIcon)({
  [theme.breakpoints.up('md')]: {
    display: 'none',
    marginLeft: '16px',
  },
});

export const ExpandLess = styled(ExpandLessIcon)({
  [theme.breakpoints.up('md')]: {
    display: 'none',
    marginLeft: '16px',
  },
});
