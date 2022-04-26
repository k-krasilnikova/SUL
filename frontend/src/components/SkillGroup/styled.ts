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
});

export const SkillsTitle = styled('div')({
  margin: '60px 0 16px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: 1.2,
  color: '#131313',
  [theme.breakpoints.down('lg')]: {
    margin: '31px 0 16px',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '16px',
  },
});

export const SkillsDivider = styled(Divider)({
  borderColor: '#C6C6C9',
  maxWidth: '1300px',
  width: '100%',
});
