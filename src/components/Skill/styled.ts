import { styled, Box, Divider } from '@mui/material';
import theme, { COLORS } from 'themeSettings';

export const SkillsBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '40px',
});

export const SkillsTitle = styled('div')({
  margin: '60px 0 16px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '28px',
  color: COLORS.skillsPage.skillTitleColor,
  [theme.breakpoints.down('lg')]: {
    margin: '31px 0 16px',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '16px',
  },
});

export const SkillsDivider = styled(Divider)({
  borderColor: COLORS.skillsPage.dividerColor,
  maxWidth: '1300px',
  width: '100%',
});
