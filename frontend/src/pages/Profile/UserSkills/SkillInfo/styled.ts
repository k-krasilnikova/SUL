import { styled } from '@mui/material';

import theme from 'themeSettings';
import { ISkillInfoWrapperProps } from 'pages/Profile/types';

export const SkillsInfoList = styled('div')({
  margin: '17px',
  [theme.breakpoints.down('lg')]: {
    margin: 0,
  },
  [theme.breakpoints.down('md')]: {
    margin: '10px 17px',
  },
});

export const SkillInfoWrapper = styled('div')<ISkillInfoWrapperProps>(({ completed }) => ({
  display: 'inline-block',
  maxWidth: '210px',
  width: '210px',
  height: '100px',
  padding: '16px',
  marginRight: '64px',
  marginBottom: '7px',
  background: '#EAEAEA',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  ...(completed && {
    backgroundColor: '#F5F5F5',
    border: '1px solid #EFEFEF',
  }),
  fontWeight: 400,
  verticalAlign: 'middle',
  borderRadius: '5px',
  [theme.breakpoints.down('md')]: {
    minWidth: '120px',
    maxWidth: '150px',
    height: '70px',
    padding: '7px 8px 4px 8px',
    margin: '8px 12px 8px 0',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '12px 32px 12px 0',
  },
  [theme.breakpoints.down(1200)]: {
    marginRight: '32px',
  },
}));

export const SkillInfoFlex = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '56px',
  width: '175px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
    alignItems: 'top',
  },
});

export const SkillInfoTextWrapper = styled('div')({
  position: 'relative',
});

export const SkillInfoTextWidth = styled('div')({
  width: '70px',
  [theme.breakpoints.down('md')]: {
    width: '60px',
  },
});

export const SkillInfoText = styled('div')({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&: hover': {
    cursor: 'pointer',
  },
});

export const SkillInfoStage = styled('div')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    marginTop: '3px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '13px',
  },
});

export const ImageWrapper = styled('div')({
  marginRight: '20px',
  [theme.breakpoints.down('md')]: {
    marginRight: '10px',
  },
});

export const SkillProgress = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '42px',
  height: '56px',
  [theme.breakpoints.down('md')]: {
    width: '24px',
    height: '24px',
  },
});
