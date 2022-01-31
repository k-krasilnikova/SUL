import styled from 'styled-components';
import { Input } from '@mui/material';

import theme from 'themeSettings';

interface SkillProps {
  completed?: boolean;
}

export const SearchWrapper = styled('div')({
  marginLeft: '48px',
});
export const SearchSkill = styled(Input)({
  fontSize: '18px',
  lineHeight: '33.61px',
});
export const SkillsBox = styled('div')({
  width: '100%',
});
export const SkillsList = styled('div')({
  [theme.breakpoints.up('md')]: {
    paddingTop: '8px',
  },
  [theme.breakpoints.up('xl')]: {
    paddingTop: '16px',
  },
});
export const SkillsListItem = styled('div')({
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'bold',
  paddingTop: '24px',
  marginLeft: '63px',
  color: '#2C2525',
});
export const Star = styled('img')({
  [theme.breakpoints.up('md')]: {
    width: '10px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '16px',
  },
});
export const SkillTitle = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',

  width: '100%',
  [theme.breakpoints.up('md')]: {
    alignItems: 'start',
    height: '14px',
  },
  [theme.breakpoints.up('xl')]: {
    alignItems: 'center',
  },
});
export const Title = styled('div')({
  fontWeight: 'bold',
  marginLeft: '5px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
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
    padding: '12px 17px',
    height: '84px',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '17px',
  },
});
export const SkillInfo = styled('div')<SkillProps>(({ completed }) => ({
  display: 'inline-block',
  borderRadius: '5px',
  [theme.breakpoints.up('xs')]: {
    width: '160px',
    height: '70px',
    padding: '10px',
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '100px',
    maxWidth: '150px',
    height: '60px',
    padding: '8px 2px 0px 8px',
    marginRight: '32px',
  },
  [theme.breakpoints.up('xl')]: {
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
  [theme.breakpoints.up('md')]: {
    display: 'block',
    maxHeight: '34px',
    width: '95%',
  },
  [theme.breakpoints.up('xl')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '41px',
    width: '168px',
  },
});
export const SkillProgress = styled('div')({
  [theme.breakpoints.up('xs')]: {
    marginRight: '10px',
  },
  [theme.breakpoints.up('md')]: {
    float: 'left',
    marginRight: '8px',
    width: '24px',
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: '16px',
    width: '41px',
  },
});
export const SkillInfoText = styled('div')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
    lineHeight: '16px',
    width: '90%',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '16px',
    lineHeight: '120%',
  },
});
export const SkillInfoStage = styled('div')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '12px',
    lineHeight: '14px',
    marginLeft: '32px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '13px',
    lineHeight: '15px',
    marginLeft: '57px',
  },
});
export const NoSkills = styled('div')({
  marginTop: '80px',
});
