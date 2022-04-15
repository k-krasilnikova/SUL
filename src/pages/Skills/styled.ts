import { styled } from '@mui/styles';
import { Grid, Box, Input, Divider } from '@mui/material';
import theme, { COLORS } from 'themeSettings';

export const SkillsPageContainer = styled(Grid)({
  [theme.breakpoints.down('xl')]: {
    padding: '16px 24px 16px 14px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 30px 24px 0px',
    margin: 0,
  },
  maxWidth: '1482px',
  paddingTop: '16px',
});

export const SearchWrapper = styled('div')({
  marginLeft: '0px',
});

export const SearchSkill = styled(Input)({
  fontFamily: theme.typography.fontFamily,
  fontWeight: '400',
  fontSize: '26px',
  lineHeight: '34px',
  letterSpacing: '0,62',
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    lineHeight: '34px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
});

export const StyledDivider = styled(Divider)({
  borderColor: COLORS.skillsPage.dividerColor,
  width: '400px',
  [theme.breakpoints.down('md')]: {
    width: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
});

export const SkillsWrapper = styled(Box)({
  padding: '40px',
  [theme.breakpoints.down('lg')]: {
    padding: '0 0 0 28px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: 0,
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
