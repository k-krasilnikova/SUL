import { Button as ToggleButton, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material';

import theme from 'themeSettings';

interface ToggleButtonProps {
  isOpened: boolean;
}

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
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  alignItems: 'end',
  [theme.breakpoints.down('xl')]: {
    height: '36px',
  },
  [theme.breakpoints.down('lg')]: {
    height: '28px',
  },
});

export const SkillsAndCoursesButton = styled(ToggleButton)<ToggleButtonProps>(({ isOpened }) => ({
  backgroundColor: '#ffffff ',
  color: '#000000 ',
  fontSize: '16px',
  fontWeight: '400 ',
  width: '135px',
  height: '40px',
  borderRadius: '4px 4px 0 0 ',
  border: '1px solid #0000001A ',
  padding: 0,
  ...(isOpened && {
    width: '146px',
    height: '44px',
  }),
  [theme.breakpoints.down('xl')]: {
    height: '36px',
    ...(isOpened && {
      height: '40px',
    }),
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
    height: '28px',
    width: '90px',
    paddingTop: '3px',
    ...(isOpened && {
      width: '100px',
      height: '32px',
    }),
  },
}));

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
    marginLeft: 0,
  },
});
