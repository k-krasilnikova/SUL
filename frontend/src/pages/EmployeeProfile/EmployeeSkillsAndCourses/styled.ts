import { Button as ToggleButton, ButtonGroup } from '@mui/material';
import styled from 'styled-components';

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
  backgroundColor: '#ffffff !important',
  color: '#000000 !important',
  fontSize: '16px !important',
  fontWeight: '400 !important',
  width: '135px !important',
  height: '40px',
  borderRadius: '4px 4px 0 0 !important',
  border: '1px solid #0000001A !important',
  padding: '0 !important',
  ...(isOpened && {
    width: '146px !important',
    height: '44px',
  }),
  [theme.breakpoints.down('xl')]: {
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
