import { styled, Button as ToggleButton, ButtonGroup } from '@mui/material';

import theme from 'themeSettings';

interface ToggleButtonProps {
  isOpened: boolean;
}

export const SkillsAndCoursesBox = styled('div')({
  display: 'flex',
  marginLeft: '63px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '190px',
    marginLeft: '16px',
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
  [theme.breakpoints.down('md')]: {
    marginBottom: '20px',
  },
});

export const SkillsAndCoursesButton = styled(ToggleButton)<ToggleButtonProps>(({ isOpened }) => ({
  '&.MuiButton-root': {
    background: '#FFF',
    color: '#000',
    fontSize: '16px',
    fontWeight: 400,
    width: '135px',
    height: '40px',
    letterSpacing: '-0.62px',
    padding: 0,
    ...(isOpened && {
      width: '146px',
      height: '44px',
    }),
    '&.MuiButtonGroup-grouped': {
      border: '1px solid #0000001A',
      borderRadius: '4px 4px 0 0',
    },
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
