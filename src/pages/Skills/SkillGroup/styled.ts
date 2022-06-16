import { styled, Box, Divider } from '@mui/material';

import theme from 'themeSettings';

export const SkillsGroupWrapper = styled(Box)({
  '&:last-child .MuiDivider-root': {
    display: 'none',
  },
});

export const SkillsBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '40px',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '32px',
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: '16px',
  },
});

export const SkillsTitle = styled('div')({
  margin: '60px 0 16px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: 1.2,
  color: '#131313',
  [theme.breakpoints.down('lg')]: {
    margin: '24px 0 16px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '16px',
  },
});

export const SkillsDivider = styled(Divider)({
  borderColor: '#C6C6C9',
  maxWidth: '1300px',
  width: '100%',
});

export const NoSkills = styled(Box)({
  marginTop: '300px',
});
