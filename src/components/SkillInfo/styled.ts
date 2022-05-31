import { styled } from '@mui/material';

import theme from 'themeSettings';
import { ISkillInfoWrapperProps } from './types';

export const SkillInfoWrapper = styled('div')<ISkillInfoWrapperProps>(({ completed }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '22px 16px',
  fontSize: '18px',
  fontWeight: 400,
  background: '#EAEAEA',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '5px',
  ...(completed && {
    backgroundColor: '#F5F5F5',
    border: '1px solid #EFEFEF',
  }),
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '12px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
}));

export const ImageWrapper = styled('div')({
  marginRight: '20px',
  [theme.breakpoints.down('md')]: {
    marginRight: '10px',
  },
});

export const SkillProgressWrapper = styled('div')({
  marginLeft: '20px',
  [theme.breakpoints.down('md')]: {
    marginLeft: '10px',
  },
});

export const SkillInfoText = styled('div')({
  maxWidth: '80px',
  width: '80px',
});

export const SkillInfoTitle = styled('h5')({
  margin: 0,
  marginBottom: '4px',
  fontSize: '18px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&: hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
});

export const SkillInfoStage = styled('p')({
  margin: 0,
});
