import { styled } from '@mui/styles';
import { Grid, Box } from '@mui/material';
import theme from 'themeSettings';

export const SkillsPageContainer = styled(Grid)({
  [theme.breakpoints.down('xl')]: {
    padding: '16px 24px 16px 14px',
  },
  [theme.breakpoints.down(950)]: {
    padding: '0px 8px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '16px 30px 24px 0px',
    margin: '0px 0px 0px -6px !important',
  },
  maxWidth: '1482px',
  paddingTop: '16px',
});

export const MobileSearchWrapper = styled('div')({
  width: '100%',
  position: 'relative',
  margin: '16px 0px 8px 0px',
  height: '30px',
  [theme.breakpoints.up(950)]: {
    display: 'none',
  },
});

export const SkillsWrapper = styled(Box)({
  padding: '40px',
});

export const SkillsBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
});

export const SkillsTitle = styled('div')({
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '28px',
  color: '#131313',
});

export const GridItem = styled(Grid)({
  height: 'fit-content',
  width: '711px',
  color: 'black',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
    paddingLeft: '10px',
    paddingTop: '8px',
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '0px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '711px',
    paddingLeft: '30px',
    paddingTop: '24px',
  },
});
