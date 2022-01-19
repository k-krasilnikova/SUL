import styled from 'styled-components';
import { List, Typography, Input } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import theme from 'themeSettings';

export const SearchWrapper = styled('div')({
  marginLeft: '48px',
});
export const SearchSkill = styled(Input)({
  fontSize: '18px',
  lineHeight: '33.61px',
});
export const SkillsBox = styled('div')({
  width: '95%',
});
export const SkillsList = styled(List)({
  marginTop: '20px',
});
export const SkillsListItem = styled('div')({
  fontFamily: '"Ubuntu", sans-serif',
  color: 'black',
  fontWeight: 'bold',
  paddingTop: '24px',
  marginLeft: '63px',
});
export const SkillTitle = styled('div')({
  display: 'flex',
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
  },
});
export const SkillsInfoList = styled('div')({
  padding: '17px',
});
export const SkillInfo = styled('div')({
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
  display: 'inline-flex',
  backgroundColor: '#f5f5f5',
  marginRight: '64px',
  border: '1px solid #efefef',
  borderRadius: '5px',
});
export const SkillProgress = styled(CircularProgress)({
  [theme.breakpoints.up('xs')]: {
    margin: '2px 10px 5px 3px',
  },
  [theme.breakpoints.up('md')]: {
    margin: '10px 20px 10px 5px',
  },
  color: '#1bc02c',
});
export const SkillInfoText = styled(Typography)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
});
