import { styled, Box } from '@mui/material';

import theme, { COLORS } from 'themeSettings';

export const SkillContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '172px',
  height: '195px',
  margin: '8px',
  padding: '16px',
  border: '1px solid',
  borderColor: '#919195',
  borderRadius: '4px',
  boxSizing: 'border-box',
  backgroundColor: '#EFEFF0',
  [theme.breakpoints.down('lg')]: {
    width: '140px',
    height: '160px',
    padding: '8px 8px 5px 7px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '8px 12px 8px 0',
  },
});

export const SkillNameWrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
});

export const SkillName = styled(Box)({
  maxWidth: '140px',
  margin: '17px 0 16px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '1.2em',
  textAlign: 'center',
  wordBreak: 'break-all',
  color: COLORS.primaryTextColor,
  [theme.breakpoints.down('lg')]: {
    lineHeight: '1em',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
});

export const ImageWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  height: '80px',
  margin: 0,
});
