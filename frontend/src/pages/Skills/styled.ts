import { styled, Grid, Box, Divider } from '@mui/material';

import SearchInput from 'components/SearchInput';
import theme from 'themeSettings';

export const SkillsPageContainer = styled(Grid)({
  [theme.breakpoints.down('xl')]: {
    padding: '16px 24px 16px 14px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 30px 24px 0',
    margin: 0,
  },
  maxWidth: '1482px',
  paddingTop: '16px',
});

export const SearchWrapper = styled('div')({
  marginLeft: 0,
});

export const SearchSkill = styled(SearchInput)({
  '&::after, &::before': {
    display: 'none',
  },
  fontFamily: theme.typography.fontFamily,
  fontWeight: 400,
  fontSize: '18px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    lineHeight: '34px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
});

export const StyledDivider = styled(Divider)({
  borderColor: '#C6C6C9',
  width: '400px',
  [theme.breakpoints.down('md')]: {
    width: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
});

export const SkillsWrapper = styled(Box)({
  width: '100%',
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
