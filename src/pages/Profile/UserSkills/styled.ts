import { styled, Input, Divider } from '@mui/material';

import theme from 'themeSettings';

export const SearchWrapper = styled('div')({
  [theme.breakpoints.up('xs')]: {
    marginLeft: 0,
  },
  [theme.breakpoints.up('xl')]: {
    marginLeft: '63px',
  },
});

export const SearchSkill = styled(Input)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: 2,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
  },
});

export const SkillsBox = styled('div')({
  [theme.breakpoints.up('xs')]: {
    maxWidth: '288px',
    marginLeft: '13px',
    marginRight: '19px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '828px',
    marginLeft: '54px',
    marginRight: '47px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
});

export const SkillsList = styled('div')({
  [theme.breakpoints.up('xs')]: {
    paddingTop: '10px',
    maxWidth: '288px',
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: '16px',
    maxWidth: '828px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '100%',
  },
});

export const SkillsListItem = styled('div')({
  [theme.breakpoints.up('xs')]: {
    paddingTop: '4px',
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: '16px',
  },
  [theme.breakpoints.up('xl')]: {
    marginLeft: '63px',
  },
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'bold',
  color: '#2C2525',
});

export const SkillTitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '18px',
});

export const Star = styled('img')({
  [theme.breakpoints.up('xs')]: {
    width: '10px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '16px',
  },
});

export const Title = styled('div')({
  fontWeight: 'bold',
  marginLeft: '5px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
    paddingTop: 0,
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
    paddingTop: '3px',
  },
});

export const SkillsInfoList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  marginBottom: '18px',
  padding: '0 20px',
  [theme.breakpoints.down('md')]: {
    gap: '18px',
  },
});

export const SkillsDivider = styled(Divider)({
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
});

export const NoSkills = styled('div')({
  [theme.breakpoints.up('xs')]: {
    marginTop: '50px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '80px',
  },
});
