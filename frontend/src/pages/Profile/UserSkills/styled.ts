import styled from 'styled-components';
import { Input, Divider } from '@mui/material';
import { Search } from '@mui/icons-material';

import theme from 'themeSettings';

interface SkillProps {
  completed?: boolean;
}

export const SearchWrapper = styled('div')({
  [theme.breakpoints.up('xs')]: {
    marginLeft: '0px',
  },
  [theme.breakpoints.up('xl')]: {
    marginLeft: '48px',
  },
});
export const SearchIcon = styled(Search)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '10px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '15px',
  },
});
export const SearchSkill = styled(Input)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: '33.61px',
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
    marginLeft: '0px',
    marginRight: '0px',
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
  flexDirection: 'row',
  justifyContent: 'flex-start',
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
  },
  [theme.breakpoints.up('sm')]: {
    alignItems: 'start',
  },
  [theme.breakpoints.up('xl')]: {
    alignItems: 'center',
    height: '23px',
  },
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
    paddingTop: '0px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
    paddingTop: '3px',
  },
});
export const SkillsInfoList = styled('div')({
  [theme.breakpoints.up('md')]: {
    padding: '0px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '0px 17px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '17px',
  },
});
export const SkillInfo = styled('div')<SkillProps>(({ completed }) => ({
  display: 'inline-block',
  borderRadius: '5px',
  [theme.breakpoints.up('xs')]: {
    minWidth: '120px',
    maxWidth: '150px',
    height: '60px',
    padding: '7px 8px 4px 8px',
    margin: '8px 12px 8px 0px',
  },
  [theme.breakpoints.up('sm')]: {
    margin: '12px 32px 12px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '200px',
    width: '200px',
    height: '100px',
    padding: '16px',
    marginRight: '64px',
  },
  background: '#EAEAEA',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  ...(completed && {
    backgroundColor: '#f5f5f5',
    border: '1px solid #efefef',
  }),
  fontWeight: 'normal',
  verticalAlign: 'middle',
}));
export const SkillInfoFlex = styled('div')({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'top',
  },
  [theme.breakpoints.up('xl')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '56px',
    width: '168px',
  },
});
export const SkillProgress = styled('div')({
  [theme.breakpoints.up('xs')]: {
    marginRight: '8px',
    width: '24px',
    height: '24px',
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: '16px',
    width: '41px',
    height: '56px',
  },
});
export const SkillInfoText = styled('div')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: '16px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '16px',
    lineHeight: '120%',
    width: '110px',
  },
});
export const SkillInfoStage = styled('div')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    lineHeight: '14px',
    marginTop: '3px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '13px',
    lineHeight: '15px',
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
    marginTop: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '80px',
  },
});
