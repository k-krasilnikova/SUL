import styled from 'styled-components';
import { List, Typography, Input } from '@mui/material';

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
export const SkillsList = styled(List)({
  marginTop: '20px',
});
export const SkillsListItem = styled('div')({
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'bold',
  paddingTop: '24px',
  marginLeft: '63px',
  color: '#2C2525',
});
export const SkillTitle = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
});
export const Title = styled('div')({
  fontWeight: 'bold',
  marginLeft: '5px',
  [theme.breakpoints.up('xs')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
    paddingTop: '3px',
  },
});
export const SkillsInfoList = styled('div')({
  padding: '17px',
});
export const SkillInfo = styled('div')<SkillProps>(({ completed }) => ({
  display: 'inline-flex',
  marginRight: '64px',
  borderRadius: '5px',
  [theme.breakpoints.up('xs')]: {
    width: '160px',
    height: '70px',
    padding: '10px',
  },
  [theme.breakpoints.up('md')]: {
    width: '200px',
    height: '100px',
    padding: '20px',
  },
  background: '#EAEAEA',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  ...(completed && {
    backgroundColor: '#f5f5f5',
    border: '1px solid #efefef',
  }),
}));
export const SkillProgress = styled('div')({
  [theme.breakpoints.up('xs')]: {
    margin: '0px 10px 5px 3px',
  },
  [theme.breakpoints.up('md')]: {
    margin: '0px 20px 10px 5px',
  },
  width: '50px',
  marginRight: '20px',
});
export const SkillInfoText = styled(Typography)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
});
