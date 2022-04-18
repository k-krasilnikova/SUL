import { styled } from '@mui/material';
import theme, { COLORS } from 'themeSettings';

export const SkillContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '172px',
  height: '195px',
  margin: '8px',
  padding: '16px',
  border: '1px solid',
  borderColor: COLORS.skillsPage.borderSkillContainer,
  borderRadius: '4px',
  boxSizing: 'border-box',
  backgroundColor: COLORS.skillsPage.bgSkillContainer,
  [theme.breakpoints.down('lg')]: {
    width: '140px',
    height: '160px',
    padding: '8px 8px 5px 7px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '8px 12px 8px 0',
  },
});

export const SkillName = styled('p')({
  display: 'flex',
  justifyContent: 'center',
  margin: '17px 0 16px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '21px',
  color: COLORS.primaryTextColor,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '18px',
  },
});

export const SkillGroup = styled('p')({
  width: '140px',
  height: '29px',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: theme.typography.fontFamily,
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '21px',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: COLORS.skillsPage.bgSkillGroup,
  borderRadius: '4px',
  backgroundColor: COLORS.secondaryColor,
  [theme.breakpoints.down('lg')]: {
    width: '125px',
    height: '26px',
    fontSize: '16px',
    lineHeight: '18px',
  },
});

export const ImageWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  height: '80px',
  margin: 0,
});
